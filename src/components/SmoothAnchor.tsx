"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SmoothAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const scrollEase = (progress: number) => 1 - Math.pow(1 - progress, 3);

let activeAnimationFrame = 0;

function scrollToHash(hash: string) {
  const target = document.querySelector<HTMLElement>(hash);

  if (!target) {
    return false;
  }

  const header = document.querySelector<HTMLElement>("header");
  const headerOffset = header ? header.offsetHeight + 12 : 0;
  const startTop = window.scrollY;
  const targetTop =
    hash === "#home"
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const nextTop = Math.max(targetTop, 0);
  const distance = nextTop - startTop;
  const duration = Math.min(Math.max(Math.abs(distance) * 0.32, 320), 720);
  let startTime = 0;

  window.cancelAnimationFrame(activeAnimationFrame);
  window.history.pushState(null, "", hash);

  const step = (currentTime: number) => {
    if (!startTime) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startTop + distance * scrollEase(progress));

    if (progress < 1) {
      activeAnimationFrame = window.requestAnimationFrame(step);
    }
  };

  activeAnimationFrame = window.requestAnimationFrame(step);
  return true;
}

export default function SmoothAnchor({
  children,
  href,
  onClick,
  target,
  ...props
}: SmoothAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !href ||
      target ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const url = new URL(href, window.location.href);
    const isSamePage =
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname;

    if (!isSamePage || !url.hash || url.hash === "#") {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    scrollToHash(url.hash);
  };

  return (
    <a href={href} target={target} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
