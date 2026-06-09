const MARQUEE_UNIT =
  "// DEPLOYING... // REDUCING... // OVERRIDING_CORE... // SYSTEM_ACTIVE //";

/** Repeat enough units to cover wide viewports with no empty gap while scrolling. */
const MARQUEE_FILL = MARQUEE_UNIT.repeat(8);

export function MarqueeBar() {
  const continuous = `${MARQUEE_FILL}${MARQUEE_FILL}`;

  return (
    <div className="marquee-bar" aria-hidden>
      <div className="marquee-bar__viewport">
        <div className="marquee-bar__track">
          <span className="marquee-bar__segment">{continuous}</span>
        </div>
      </div>
    </div>
  );
}
