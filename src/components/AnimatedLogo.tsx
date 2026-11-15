type AnimatedLogoProps = {
  className?: string
  title?: string
}

/**
 * SIVIQ animated logo — winking smiley mark ported from
 * public/Siviq Animated Logo.html. Animations are driven by the
 * .svq-* classes in index.css.
 */
export function AnimatedLogo({ className = '', title = 'SIVIQ animated logo' }: AnimatedLogoProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      role="img"
      viewBox="0 0 1254 1254"
    >
      <defs>
        <clipPath id="svq-sq">
          <rect width="1254" height="1254" rx="300" />
        </clipPath>
      </defs>
      <g className="svq-all">
        <rect width="1254" height="1254" rx="300" fill="#06B6D4" />
        <g clipPath="url(#svq-sq)">
          <path
            className="svq-brow"
            d="M240 355C250 320 330 262 400 262c40 0 75 13 85 28 2 7-5 10-15 8-90-6-170 22-220 62-7 3-12 0-10-5z"
            fill="#000"
          />
          <g className="svq-eye">
            <circle cx="415" cy="472" r="142" fill="#fff" />
            <g className="svq-pupil">
              <ellipse cx="445" cy="490" rx="108" ry="135" fill="#000" />
              <ellipse cx="470" cy="415" rx="40" ry="33" transform="rotate(35 470 415)" fill="#fff" />
              <circle cx="514" cy="481" r="15" fill="#fff" />
              <circle cx="389" cy="531" r="20" fill="#22c8ff" />
            </g>
            <path d="M300 620C340 565 440 545 535 568L620 650H300z" fill="#06B6D4" />
          </g>
          <path
            className="svq-wink"
            d="M705 515C740 430 840 330 935 325c40-2 65 8 68 18 1 7-8 9-18 9-65 10-115 43-152 76 87-13 177 7 215 62 4 15-3 25-18 23-50-13-90-28-150-23-60 5-120 25-160 40-10 0-17-7-15-15z"
            fill="#000"
          />
          <g className="svq-mouth">
            <path
              d="M345 700c0-25 15-32 40-28 175 48 335 48 495 0 35-7 48 13 48 38-18 110-98 190-158 220H515C420 890 360 800 345 700z"
              fill="#000"
            />
            <g className="svq-tongue">
              <path
                d="M492 810c0-35 28-45 68-42h160c50-3 72 25 70 62-5 70-60 195-150 195S505 920 492 810z"
                fill="#38BDF8"
              />
              <path d="M595 770c10 30 15 135 55 135s48-95 60-135z" fill="#0EA5E9" />
              <ellipse cx="755" cy="830" rx="14" ry="42" transform="rotate(-8 755 830)" fill="#BAE6FD" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
