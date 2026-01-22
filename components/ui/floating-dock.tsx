"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip-card";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    tooltipImage?: string;
    onClick?: () => void;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    tooltipImage?: string;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: idx * 0.05 }}
              >
                {item.onClick ? (
                    <button
                        onClick={() => {
                            item.onClick?.();
                            setOpen(false);
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                    >
                        <div className="h-4 w-4">{item.icon}</div>
                    </button>
                ) : (
                    <Link
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                    >
                    <div className="h-4 w-4">{item.icon}</div>
                    </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 dark:bg-white border border-neutral-200 dark:border-neutral-800 shadow-xl"
      >
        {open ? (
             <IconX className="h-6 w-6 text-white dark:text-neutral-900" />
        ) : (
             <IconMenu2 className="h-6 w-6 text-white dark:text-neutral-900" />
        )}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    tooltipImage?: string;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  tooltipImage,
  onClick,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
  tooltipImage?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!ref.current) return Infinity;
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 2, 1]);
  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const hoverTransform = useTransform(distance, [-150, 0, 150], [0, -10, 0]);
  const y = useSpring(hoverTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Determine content: Image ONLY if available, otherwise just text
  const tooltipContent = tooltipImage ? (
    // Increased size to w-72 (288px) and h-40 (160px)
    <div className="w-72 h-40 relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-800">
      <Image
        src={tooltipImage}
        alt={title}
        fill
        className="object-contain bg-neutral-100 dark:bg-neutral-900"
        priority
        sizes="(max-width: 768px) 100vw, 288px"
      />
    </div>
  ) : (
    <div className="px-4 py-2">
      <span className="font-bold text-sm">{title}</span>
    </div>
  );
  
  const content = (
    <motion.div
        ref={ref}
        style={{ width: 40, height: 40, scale, y }}
        className="flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer"
    >
        <div className="flex h-5 w-5 items-center justify-center">
            {icon}
        </div>
    </motion.div>
  );

  return (
    // Wrap the Icon in the Tooltip component
    <Tooltip content={tooltipContent} containerClassName="relative">
      {onClick ? (
        <div onClick={onClick}>
            {content}
        </div>
      ) : (
        <Link href={href}>
            {content}
        </Link>
      )}
    </Tooltip>
  );
}