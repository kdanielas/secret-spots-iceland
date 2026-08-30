/* @ds-bundle: {"format":4,"namespace":"SecretSpotsIcelandDesignSystem_2d8cbc","components":[{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"FeaturedOnBar","sourcePath":"components/content/FeaturedOnBar.jsx"},{"name":"ImageStrip","sourcePath":"components/content/ImageStrip.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"TestimonialQuote","sourcePath":"components/content/TestimonialQuote.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"InquiryForm","sourcePath":"components/forms/InquiryForm.jsx"},{"name":"ContactPanel","sourcePath":"components/nav/ContactPanel.jsx"},{"name":"Footer","sourcePath":"components/nav/Footer.jsx"},{"name":"Hero","sourcePath":"components/nav/Hero.jsx"},{"name":"Navbar","sourcePath":"components/nav/Navbar.jsx"},{"name":"FactBar","sourcePath":"components/tours/FactBar.jsx"},{"name":"HighlightTile","sourcePath":"components/tours/HighlightTile.jsx"},{"name":"IconBullet","sourcePath":"components/tours/IconBullet.jsx"},{"name":"StatBar","sourcePath":"components/tours/StatBar.jsx"},{"name":"StepItem","sourcePath":"components/tours/StepItem.jsx"},{"name":"TourCard","sourcePath":"components/tours/TourCard.jsx"}],"sourceHashes":{"components/content/FaqItem.jsx":"0d1ee6847a94","components/content/FeaturedOnBar.jsx":"2969e1cf503a","components/content/ImageStrip.jsx":"754173a0a778","components/content/ReviewCard.jsx":"3698e02a74f5","components/content/TestimonialQuote.jsx":"d7bd269423c5","components/core/Button.jsx":"a0867e289001","components/core/Chip.jsx":"8f94f0d28443","components/core/Eyebrow.jsx":"bcc63029d3d4","components/core/Icon.jsx":"719c5d021c4e","components/core/IconChip.jsx":"4fb117cbc5e0","components/core/Logo.jsx":"c1aedbf67dc9","components/core/Rating.jsx":"f2965b0bafba","components/core/SectionHeading.jsx":"899ed31a8e18","components/forms/Field.jsx":"7d12fde8cfe0","components/forms/InquiryForm.jsx":"50f44aa7e1d8","components/nav/ContactPanel.jsx":"156a348964cd","components/nav/Footer.jsx":"4cd6c5e375fe","components/nav/Hero.jsx":"df9b3d59ea4b","components/nav/Navbar.jsx":"85ebc62b8cfb","components/tours/FactBar.jsx":"cd2e21ff8b56","components/tours/HighlightTile.jsx":"ed7854ca141c","components/tours/IconBullet.jsx":"c1b15649f04c","components/tours/StatBar.jsx":"c4993e2a379b","components/tours/StepItem.jsx":"3fa0c88f138d","components/tours/TourCard.jsx":"317748ce6682","ui_kits/website/About.jsx":"d2d24c93c6fa","ui_kits/website/App.jsx":"2357926c5151","ui_kits/website/Home.jsx":"faea43fef31d","ui_kits/website/Layout.jsx":"21b7d9615969","ui_kits/website/TourDetail.jsx":"a475c7be4b98","ui_kits/website/Tours.jsx":"968dc7ab02eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SecretSpotsIcelandDesignSystem_2d8cbc = window.SecretSpotsIcelandDesignSystem_2d8cbc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ImageStrip.jsx
try { (() => {
/** Edge-to-edge row of equal photos — the brand's rhythm break between text sections. */
function ImageStrip({
  images = [],
  columns,
  gap = 'var(--grid-gap)',
  ratio = '5 / 4',
  radius = 'var(--radius-image)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns || images.length}, 1fr)`,
      gap,
      ...style
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      overflow: 'hidden',
      borderRadius: radius,
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
Object.assign(__ds_scope, { ImageStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Uppercase tracked overline that opens nearly every section. */
function Eyebrow({
  children,
  tone = 'accent',
  align,
  style
}) {
  const colors = {
    accent: 'var(--text-eyebrow)',
    amber: 'var(--amber-400)',
    muted: 'var(--text-muted)',
    onDark: 'var(--amber-400)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone],
      textAlign: align,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Lucide (static SVG, 24x24, 2px stroke) rendered as a CSS mask so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  color,
  className,
  style
}) {
  const url = `https://unpkg.com/lucide-static@0.544.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color || 'currentColor',
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
/** One hairline-carded accordion row. Plus when closed, minus when open. */
function FaqItem({
  question,
  answer,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      padding: 'var(--space-5) var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      width: '100%',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-subtle)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'minus' : 'plus',
    size: 13
  }))), open ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 'var(--space-4) 0 0',
      paddingRight: 40
    }
  }, answer) : null);
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--control-px-sm)',
    fontSize: '.8125rem'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 var(--control-px-md)',
    fontSize: '.9375rem'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--control-px-lg)',
    fontSize: '.9375rem'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid transparent'
  },
  dark: {
    background: 'var(--action-dark-bg)',
    color: 'var(--action-dark-fg)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-outline-fg)',
    border: '1px solid var(--action-outline-border)'
  },
  outlineLight: {
    background: 'rgba(23,32,40,.18)',
    color: 'var(--cream-50)',
    border: '1px solid var(--border-on-dark)'
  },
  link: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '1px solid transparent',
    padding: 0,
    height: 'auto'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-bg-hover)'
  },
  dark: {
    background: 'var(--action-dark-bg-hover)'
  },
  outline: {
    background: 'rgba(29,45,68,.05)',
    borderColor: 'var(--ink-900)'
  },
  outlineLight: {
    background: 'rgba(251,246,240,.16)',
    borderColor: 'var(--cream-50)'
  },
  link: {
    color: 'var(--blue-500)'
  }
};

/** The brand's action. Amber pill = the one commercial CTA per view; everything else is quieter. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  href,
  as,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const isLink = variant === 'link';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isLink ? 8 : 10,
    width: fullWidth ? '100%' : 'auto',
    font: 'var(--type-button)',
    fontSize: SIZES[size].fontSize,
    letterSpacing: isLink ? 'var(--tracking-eyebrow)' : '0',
    textTransform: isLink ? 'uppercase' : 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-control)',
    opacity: disabled ? 0.45 : 1,
    transform: press && !disabled ? 'var(--press-scale)' : 'none',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: size === 'sm' ? 14 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/** Small pill label. "onImage" is the translucent duration badge on tour photos. */
function Chip({
  children,
  tone = 'sand',
  icon,
  style
}) {
  const tones = {
    sand: {
      background: 'var(--surface-chip)',
      color: 'var(--ink-900)',
      border: '1px solid var(--border-subtle)'
    },
    onImage: {
      background: 'var(--scrim-chip)',
      color: 'var(--cream-50)',
      border: '1px solid rgba(251,246,240,.18)',
      backdropFilter: 'var(--blur-chip)'
    },
    light: {
      background: 'var(--cream-50)',
      color: 'var(--ink-900)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-card)'
    },
    amber: {
      background: 'var(--amber-400)',
      color: 'var(--espresso-900)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--type-body-sm)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
/** Circular sand chip holding a blue Lucide glyph — the brand's value-prop bullet marker. */
function IconChip({
  name,
  size = 40,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: onDark ? 'var(--surface-dark-field)' : 'var(--surface-chip)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--blue-500)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/** The Secret Spots Iceland wordmark (extracted from the supplied mockups). */
function Logo({
  height = 34,
  src = '../../assets/logo.png',
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Secret Spots Iceland",
    style: {
      height,
      width: 'auto',
      filter: onDark ? 'brightness(0) invert(1)' : 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
/** Amber five-star row. Outline stars are the brand default. */
function Rating({
  value = 5,
  max = 5,
  size = 14,
  filled = false,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--star-gold)',
      ...style
    }
  }, Array.from({
    length: max
  }, (_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: filled && i < Math.round(value) ? 'star' : 'star',
    size: size,
    style: {
      opacity: i < Math.round(value) ? 1 : 0.3
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginLeft: 6
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/content/FeaturedOnBar.jsx
try { (() => {
/** Thin sand bar under the hero listing the booking platforms. */
function FeaturedOnBar({
  label = 'As featured & booked on',
  platforms = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      background: 'var(--sand-100)',
      padding: 'var(--space-5) var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement("span", {
    key: p.name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      font: 'var(--type-body-sm)',
      color: 'var(--text-heading)'
    }
  }, p.name, p.rating ? /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: p.rating,
    size: 11
  }) : null))));
}
Object.assign(__ds_scope, { FeaturedOnBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeaturedOnBar.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
/** Compact platform-review card: avatar, name, date, stars, truncated quote, Read More. */
function ReviewCard({
  name,
  date,
  avatar,
  initial,
  rating = 5,
  quote,
  readMore = 'Read More',
  tone = 'sand',
  style
}) {
  const tones = {
    sand: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    light: {
      background: 'var(--surface-card-light)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-pad)',
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: name,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: '#A32B2B',
      color: 'var(--cream-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--type-label)'
    }
  }, initial || name?.[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--amber-600)'
    }
  }, date))), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 12
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, quote, ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--ink-900)',
      fontWeight: 'var(--weight-bold)'
    }
  }, readMore)));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialQuote.jsx
try { (() => {
/** Large centred Prata pull-quote with stars, attribution and prev/next arrows. */
function TestimonialQuote({
  quote,
  author,
  meta,
  rating = 5,
  align = 'center',
  showNav = true,
  style
}) {
  const arrow = {
    width: 34,
    height: 34,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid var(--border-strong)',
    background: 'transparent',
    color: 'var(--ink-900)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'var(--transition-control)'
  };
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    size: 14
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-xs)',
      lineHeight: 1.55,
      color: 'var(--text-heading)',
      margin: 0,
      maxWidth: 680
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--text-muted)'
    }
  }, meta)), showNav ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: arrow,
    "aria-label": "Previous review"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    style: arrow,
    "aria-label": "Next review"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  }))) : null);
}
Object.assign(__ds_scope, { TestimonialQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
const SIZES = {
  xl: 'var(--type-display-lg)',
  lg: 'var(--type-display-md)',
  md: 'var(--type-display-sm)'
};

/** Eyebrow + Prata headline + optional lead paragraph, the standard section opener. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  size = 'lg',
  onDark = false,
  maxWidth,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'amber' : 'accent'
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: SIZES[size],
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      margin: 0,
      maxWidth: 620
    }
  }, lead) : null, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = onDark => ({
  font: 'var(--type-eyebrow)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
});
const controlStyle = onDark => ({
  width: '100%',
  boxSizing: 'border-box',
  font: 'var(--type-body)',
  color: onDark ? 'var(--cream-50)' : 'var(--ink-900)',
  background: onDark ? 'transparent' : 'var(--surface-raised)',
  border: `1px solid ${onDark ? 'var(--border-on-dark-field)' : 'var(--border-field)'}`,
  borderRadius: 'var(--radius-sm)',
  padding: '0 14px',
  height: 'var(--control-h-md)',
  outline: 'none',
  transition: 'var(--transition-control)'
});

/** Labelled form control. `onDark` is the default in practice — the enquiry form lives on the navy panel. */
function Field({
  label,
  type = 'text',
  placeholder,
  options,
  rows = 4,
  onDark = true,
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const focusRing = focus ? {
    borderColor: onDark ? 'var(--cream-50)' : 'var(--blue-500)'
  } : null;
  const common = {
    style: {
      ...controlStyle(onDark),
      ...focusRing
    },
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: labelStyle(onDark)
  }, label) : null, type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
    rows: rows,
    style: {
      ...common.style,
      height: 'auto',
      padding: '12px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)'
    }
  })) : type === 'select' ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, common, {
    style: {
      ...common.style,
      appearance: 'none',
      paddingRight: 40,
      fontFamily: 'var(--font-sans)'
    }
  }), (options || []).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))) : /*#__PURE__*/React.createElement("input", _extends({}, common, {
    type: type
  })));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/InquiryForm.jsx
try { (() => {
/** The enquiry panel: 2x2 name/contact grid, tour select, free-text, amber CTA, fine print. */
function InquiryForm({
  tours = ['Secret Reykjanes (7h)'],
  cta = 'Check Availability',
  note = "This form is a design mock-up — connect it to your real inbox / CRM before publishing.",
  onSubmit,
  style
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      onSubmit && onSubmit();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      background: 'var(--surface-dark-panel)',
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--panel-pad)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "First name",
    placeholder: "Jane"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Last name",
    placeholder: "Doe"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Travel dates",
    placeholder: "e.g. 12\u201318 June 2027"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Which tour interests you?",
    type: "select",
    options: tours
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Tell us about your trip",
    type: "textarea",
    rows: 4,
    placeholder: "Group size, interests, anything special you'd like to see..."
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    as: "button",
    type: "submit"
  }, sent ? 'Thanks — Luke will reply within 24 hours' : cta), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--text-on-dark-muted)',
      margin: 0,
      textAlign: 'center'
    }
  }, note));
}
Object.assign(__ds_scope, { InquiryForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InquiryForm.jsx", error: String((e && e.message) || e) }); }

// components/nav/ContactPanel.jsx
try { (() => {
const ROWS = [{
  icon: 'phone',
  label: 'Call or WhatsApp',
  value: '+354 845 4057'
}, {
  icon: 'map-pin',
  label: 'Based in',
  value: 'Tangabryggja 18, 110 Reykjavík, Iceland'
}, {
  icon: 'clock',
  label: 'Response time',
  value: 'Usually within 24 hours, personally from Luke.'
}];

/** The navy closing section: pitch + contact rows on the left, enquiry form on the right. */
function ContactPanel({
  eyebrow = 'Get in touch',
  title = "Let's plan your Iceland tour",
  lead = "Tell us what you'd like to experience and we'll create a personalized Iceland itinerary designed around your interests, pace and travel dates.",
  rows = ROWS,
  tours,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      padding: 'var(--section-py-tight) var(--space-9)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "amber"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      color: 'var(--text-on-dark)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-dark-muted)',
      margin: 0,
      maxWidth: 460
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-4)'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    name: r.icon,
    size: 32,
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-dark)'
    }
  }, r.value))))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    icon: "message-circle",
    style: {
      alignSelf: 'flex-start',
      marginTop: 'var(--space-4)'
    }
  }, "Message on WhatsApp")), /*#__PURE__*/React.createElement(__ds_scope.InquiryForm, {
    tours: tours
  })));
}
Object.assign(__ds_scope, { ContactPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/ContactPanel.jsx", error: String((e && e.message) || e) }); }

// components/nav/Footer.jsx
try { (() => {
const SOCIALS = ['instagram', 'facebook', 'youtube', 'linkedin', 'twitter', 'send'];

/** Centred navy footer: underlined link row, legal block, circular social buttons. */
function Footer({
  links = [{
    label: 'secretspotsoficeland'
  }, {
    label: 'About Luke'
  }, {
    label: 'Our Tours'
  }, {
    label: 'Contact'
  }, {
    label: 'Follow'
  }],
  company = 'Secretspotsiceland EHF',
  legal = ['Address: Tangabryggja 18, 110 Reykjavík, Iceland', 'Kennitala: 610823-2030', 'VAT Number: 152431', '+354 8454057'],
  socials = SOCIALS,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      borderTop: '1px solid rgba(251,246,240,.10)',
      padding: 'var(--space-10) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-dark)',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-on-dark)'
    }
  }, company), legal.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--cream-50)',
      color: 'var(--ink-800)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 15
  })))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Footer.jsx", error: String((e && e.message) || e) }); }

// components/nav/Hero.jsx
try { (() => {
/** Full-bleed photographic hero with a scrim, centred Prata headline and a two-button CTA pair. */
function Hero({
  image,
  title,
  subtitle,
  primaryCta = 'Check Availability',
  secondaryCta = 'Explore Iceland Photography Tours',
  height = 420,
  align = 'center',
  children,
  onPrimary,
  onSecondary,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-image)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      padding: 'var(--space-13) var(--space-9) var(--space-9)',
      margin: '0 auto',
      maxWidth: 'var(--container-max)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-xl)',
      color: 'var(--cream-50)',
      margin: 0,
      maxWidth: 720
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'rgba(251,250,248,.88)',
      margin: 0,
      maxWidth: 620
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onPrimary
  }, primaryCta) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outlineLight",
    onClick: onSecondary
  }, secondaryCta) : null), children));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Hero.jsx", error: String((e && e.message) || e) }); }

// components/nav/Navbar.jsx
try { (() => {
/** Site header: wordmark left, single-row text nav right, on cream. */
function Navbar({
  logoSrc = '../../assets/logo.png',
  items = [],
  active,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--surface-raised)',
      padding: '14px var(--space-9)',
      gap: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]?.label);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 30,
    src: logoSrc
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(it.label);
      }
    },
    style: {
      font: 'var(--type-nav)',
      fontWeight: active === it.label ? 'var(--weight-bold)' : 'var(--weight-regular)',
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/tours/FactBar.jsx
try { (() => {
/** Cream card of tour facts that overlaps the bottom of a tour hero. */
function FactBar({
  items = [],
  overlap = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-panel)',
      boxShadow: 'var(--shadow-bar)',
      padding: 'var(--space-6) var(--space-8)',
      marginTop: overlap ? -44 : 0,
      position: 'relative',
      zIndex: 2,
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'center',
      textAlign: 'center',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-display-xs)',
      color: 'var(--text-heading)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { FactBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/FactBar.jsx", error: String((e && e.message) || e) }); }

// components/tours/HighlightTile.jsx
try { (() => {
/** Photo + name + short blurb tile. Used in the "Highlights" grid on dark tour pages. */
function HighlightTile({
  image,
  title,
  description,
  onDark = true,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '3 / 2'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'var(--transition-image)',
      transform: hover ? 'var(--image-zoom-hover)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-display-xs)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { HighlightTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/HighlightTile.jsx", error: String((e && e.message) || e) }); }

// components/tours/IconBullet.jsx
try { (() => {
/** Icon chip + bold title + one-line support copy. The "why private" list. */
function IconBullet({
  icon,
  title,
  description,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    name: icon,
    size: 40,
    onDark: onDark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 'var(--weight-bold)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { IconBullet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/IconBullet.jsx", error: String((e && e.message) || e) }); }

// components/tours/StatBar.jsx
try { (() => {
/** Four proof stats sitting at the foot of the home hero, over the image. */
function StatBar({
  items = [],
  onDark = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: 'var(--grid-gap)',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-display-md)',
      color: onDark ? 'var(--cream-50)' : 'var(--text-heading)'
    }
  }, it.value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/tours/StepItem.jsx
try { (() => {
/** Numbered process step: oversized Prata blue numeral, bold title, short copy. */
function StepItem({
  number,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-numeral)',
      color: 'var(--blue-500)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-lead)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/tours/TourCard.jsx
try { (() => {
/** The tour product card: photo with duration badge, Prata title, level, blurb, price row, dark CTA. */
function TourCard({
  image,
  duration,
  title,
  level = 'All levels',
  description,
  kicker = 'Private tour',
  priceLabel = 'from',
  price,
  cta = 'Check Availability',
  layout = 'vertical',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const wide = layout === 'wide';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: wide ? 'column' : 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: wide ? '16 / 6.2' : '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'var(--transition-image)',
      transform: hover ? 'var(--image-zoom-hover)' : 'none'
    }
  }), duration ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    tone: "onImage"
  }, duration)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--card-pad)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-display-sm)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), level ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--ink-900)'
    }
  }, level) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: 0,
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, priceLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-price)',
      color: 'var(--text-heading)'
    }
  }, price))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    fullWidth: true,
    onClick: onClick,
    style: {
      marginTop: 'var(--space-3)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { TourCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/TourCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  Hero,
  SectionHeading,
  Button,
  TestimonialQuote,
  ImageStrip
} = window.SecretSpotsIcelandDesignSystem_2d8cbc;
function About({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Page, {
    active: "About",
    onNavigate: onNavigate
  }, /*#__PURE__*/React.createElement(Hero, {
    height: 440,
    image: IMG + 'hero-luke-highlands.jpg',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Meet Luke | Private Guide & Photographer in Hidden Iceland"),
    subtitle: "Secret Spots of Iceland was founded by Luke \u2014 a professional photographer and private guide in Iceland who has been exploring Iceland's most remote, hidden landscapes since 2006, creating private Iceland tours for travelers looking beyond the typical routes."
  }), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'basalt-sea-cliffs.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '3 / 4',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The landscape",
    title: "Born from a passion for exploration",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "It didn't start as a business. It started as an obsession. For nearly 20 years Luke has been exploring Iceland's dramatic landscapes, hidden waterfalls, remote highlands, and lesser-known corners of the island \u2014 backroads that didn't appear on maps, unique viewpoints that many visitors never get to see, and these hidden gems of Iceland reveal a quieter side of the country, away from crowded tourist routes.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "What began as a passion for adventure and photography eventually became Secret Spots of Iceland \u2014 a way to share the places he loves most with travellers from around the world.")
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-13)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The experience",
    title: 'Why "Secret Spots"',
    lead: "When Luke talks about Secret Spots, he doesn't mean places no one has ever visited. He means alternative viewpoints, lesser-known waterfalls, perfect timing, and the hidden corners of Iceland that most standard tours never reach. The kind of local knowledge that only comes from nearly two decades of dedicated exploration."
  }), /*#__PURE__*/React.createElement(ImageStrip, {
    columns: 2,
    ratio: "4 / 3",
    images: ['basalt-sea-cliffs', 'tile-reykjanesviti-lighthouse', 'tile-lake-kleifarvatn', 'tile-krysuvik'].map(n => IMG + n + '.jpg')
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'luke-portrait.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '3 / 4',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The landscape",
    title: "Luke the photographer",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "Photography has always been a big part of Luke's life. As a certified tour guide, professional photographer, and private tour guide in Iceland specializing in Iceland photography tours during every tour Luke not only guides you to incredible locations but also helps capture the moments that make your adventure special \u2014 so you return home with both amazing memories and beautiful photographs.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "His work has taken him across every corner of Iceland \u2014 from the dramatic black sand beaches of the South Coast and the otherworldly lava fields of the Reykjanes Peninsula, to remote Highland canyons and the dancing colours of the Northern Lights over glacier lagoons, creating unforgettable Northern Lights photography experiences.")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('Tours')
  }, "Explore Our Tour Gallery")))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'waterfall-camera.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '3 / 4',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The memories",
    title: "How Luke runs his tours",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "As a private tour guide in Iceland, Luke creates every private Iceland tour around the same foundation \u2014 flexibility, authenticity, and genuine passion.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "No fixed itineraries, no tour buses, no crowds. Just you, your group, and a guide who knows Iceland's hidden side intimately.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Luke works with a small team of trusted local guides who share the same values and deep local knowledge \u2014 ensuring the Secret Spots experience is always consistent, personal and unforgettable.")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconAfter: "arrow-right",
    onClick: () => onNavigate('How it works')
  }, "Learn how it works")))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'waterfall-camera.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(TestimonialQuote, {
    align: "left",
    quote: '"I started Secret Spots because I genuinely believe Iceland is best experienced privately, slowly, and with someone who knows where to look. I look forward to welcoming you and sharing the hidden places that have inspired me for nearly two decades."',
    author: "Luke, Founder of Secret Spots of Iceland",
    meta: "United States \xB7 Tripadvisor Review"
  }))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('Home');
  const go = label => {
    const known = ['Home', 'Tours', 'About'];
    setPage(known.includes(label) ? label : label === 'How it works' ? 'Home' : 'TourDetail');
    window.scrollTo({
      top: 0
    });
  };
  const Screen = {
    Home,
    Tours,
    About,
    TourDetail
  }[page] || Home;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Screen, {
    onNavigate: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 6,
      background: 'var(--surface-dark)',
      padding: 6,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-float)',
      zIndex: 60
    }
  }, ['Home', 'Tours', 'TourDetail', 'About'].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => {
      setPage(p);
      window.scrollTo({
        top: 0
      });
    },
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 14px',
      font: 'var(--type-body-sm)',
      background: page === p ? 'var(--amber-400)' : 'transparent',
      color: page === p ? 'var(--espresso-900)' : 'var(--text-on-dark)'
    }
  }, p === 'TourDetail' ? 'Tour page' : p))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  StatBar,
  FeaturedOnBar,
  SectionHeading,
  IconBullet,
  ReviewCard,
  Chip,
  Button,
  ImageStrip,
  StepItem,
  FaqItem
} = window.SecretSpotsIcelandDesignSystem_2d8cbc;
const BULLETS = [{
  icon: 'user',
  title: 'Hidden locations, not tour-bus stops',
  description: 'Nearly 20 years of local exploration means routes away from the crowds.'
}, {
  icon: 'clock',
  title: 'Flexible, weather-adaptive itineraries',
  description: 'The plan changes with the weather and the light — never the other way around.'
}, {
  icon: 'briefcase',
  title: 'Professional photography guidance',
  description: 'Luke is a photographer first — every stop is timed and framed for the shot.'
}, {
  icon: 'truck',
  title: 'Comfortable, capable vehicles',
  description: "Built for Iceland's terrain, so weather and road conditions don't cancel the day."
}, {
  icon: 'heart',
  title: 'Real local recommendations',
  description: 'Restaurants, hot springs and viewpoints Luke actually uses — not a sponsored list.'
}];
const REVIEWS = [{
  name: 'Britta Hormann',
  date: 'August 2026',
  quote: 'Luke was seriously the best guide we could have asked for! He was knowledgeable, funny, easygoing, and somehow always knew where we should go'
}, {
  name: 'Alexandra Klinke',
  date: 'August 2026',
  quote: 'An unforgettable day exploring Iceland! Luke took us to breathtaking places away from the crowds, including a beautiful waterfall hike that felt'
}, {
  name: 'Ronald Ashby',
  date: 'August 2026',
  initial: 'R',
  quote: 'The whole process with Secret Spots of Iceland from the beginning to the end could not have been done better. Luke and Fifi were very responsive wit'
}, {
  name: 'Marta Nowak',
  date: 'July 2026',
  initial: 'M',
  quote: 'We had two private days with Luke and both were completely different — he read the forecast and rebuilt the route each morning'
}];
const STEPS = [{
  number: '01',
  title: 'Tell us your dates',
  description: 'Send your travel dates, group size and interests via WhatsApp or the form below.'
}, {
  number: '02',
  title: 'Get a custom plan',
  description: 'Luke builds a route around the forecast, the light, and what you actually want to see.'
}, {
  number: '03',
  title: 'Private tour day',
  description: 'Pickup in a comfortable vehicle, flexible pace, and stops most visitors never find.'
}, {
  number: '04',
  title: 'Photos, delivered',
  description: 'Your best moments, shot and shared after the tour — not just memories on a phone.'
}];
const FAQS = [{
  question: 'Are your tours private, or do you join a group?',
  answer: "Every Secret Spots tour is 100% private — it's just you (and whoever you bring), Luke, and the vehicle. No strangers, no fixed bus schedule.",
  defaultOpen: true
}, {
  question: "What's included in the price?",
  answer: 'Private guiding, the vehicle and fuel, photography guidance, and edited photos after the tour.'
}, {
  question: 'What happens if the weather is bad?',
  answer: 'The route changes, not the day. Luke rebuilds the plan around the forecast every morning.'
}, {
  question: 'Do I need to be in good physical shape?',
  answer: 'No. Tours are all levels — walks are short and optional unless you ask for something harder.'
}, {
  question: 'Can you customize a multi-day itinerary?',
  answer: 'Yes. Multi-day routes are built from scratch around your dates and interests.'
}, {
  question: 'How far in advance should I book?',
  answer: 'Summer dates fill months ahead; winter is often possible within a couple of weeks.'
}];
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Page, {
    active: "Home",
    onNavigate: onNavigate
  }, /*#__PURE__*/React.createElement(Hero, {
    height: 480,
    image: IMG + 'hero-black-sand.jpg',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Private Iceland Tours with a Local Guide & Photographer"),
    subtitle: "Discover Iceland through photography tours designed around your pace, interests, and the best light. Explore hidden landscapes with a local Iceland private tour guide.",
    onPrimary: () => onNavigate('Tours'),
    onSecondary: () => onNavigate('Tours')
  }, /*#__PURE__*/React.createElement(StatBar, {
    style: {
      width: '100%',
      marginTop: 'var(--space-9)'
    },
    items: [{
      value: '99%',
      label: 'Would recommend'
    }, {
      value: '7+',
      label: 'Years in Iceland'
    }, {
      value: '5.0 ☆',
      label: 'Average rating'
    }, {
      value: '300+',
      label: 'Travelers guided'
    }]
  })), /*#__PURE__*/React.createElement(FeaturedOnBar, {
    platforms: [{
      name: 'Tripadvisor',
      rating: 5
    }, {
      name: 'Airbnb Experiences'
    }, {
      name: 'GetYourGuide'
    }, {
      name: 'Viator'
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'black-sand-stack.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '3 / 4',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xl",
    eyebrow: "Why choose a private tour",
    title: "Private Iceland tours offer a completely different way to explore the country",
    lead: "Our private tours of Iceland are created for travelers who want flexibility, comfort, and a deeper connection with the country. Every tour is just you and your group \u2014 designed around what you want to see, how you want to move, and what the weather and light make possible that day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, BULLETS.map(b => /*#__PURE__*/React.createElement(IconBullet, _extends({
    key: b.title
  }, b))))))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      textAlign: 'center',
      marginBottom: 'var(--space-9)'
    }
  }, "What our customers say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--grid-gap)',
      padding: '0 var(--space-9)'
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.name
  }, r))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: 'var(--space-13)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xl",
    eyebrow: "Meet your guide",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Luke \u2014 Local Guide &", /*#__PURE__*/React.createElement("br", null), "Photographer"),
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "For nearly 20 years, I've been exploring Iceland's most dramatic landscapes, hidden waterfalls, remote highlands, and lesser-known corners of the island. Through my ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        textDecoration: 'underline'
      }
    }, "Iceland photography tours"), ", I help travelers capture waterfalls, glaciers, volcanic landscapes, and the Northern Lights at their best \u2014 showcasing the lesser-known locations that most visitors never find.")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('About')
  }, "Meet the man behind the lens")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'luke-portrait.jpg',
    alt: "Luke on location in the Icelandic highlands",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      left: -14
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "light"
  }, "~20 Years in Iceland"))))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(ImageStrip, {
    ratio: "5 / 4",
    images: ['gallery-puffin', 'gallery-ice-cave-group', 'gallery-seljalandsfoss-group', 'gallery-bruarfoss-pair'].map(n => IMG + n + '.jpg')
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How it works",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "From first message to the", /*#__PURE__*/React.createElement("br", null), "photos in your hands")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-12)'
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(StepItem, _extends({
    key: s.number
  }, s))))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Frequently Asked", /*#__PURE__*/React.createElement("br", null), "Questions"),
    lead: "Starter answers below \u2014 flag any that need a fact-check against your real policies before this goes live."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, FAQS.map(q => /*#__PURE__*/React.createElement(FaqItem, _extends({
    key: q.question
  }, q)))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Layout.jsx
try { (() => {
const {
  Navbar,
  Footer,
  ContactPanel
} = window.SecretSpotsIcelandDesignSystem_2d8cbc;
const IMG = '../../assets/img/';
const NAV = [{
  label: 'Home'
}, {
  label: 'Tours'
}, {
  label: 'About'
}, {
  label: 'How it works'
}, {
  label: 'Photography Guide'
}, {
  label: 'Our Vehicles'
}, {
  label: 'Blog'
}, {
  label: 'Reviews'
}, {
  label: 'FAQ'
}];
const TOURS = ['Secret Reykjanes (7h)', 'South Coast & Waterfalls (10h)', 'Highlands 3-day', 'Northern Lights Night'];
function Section({
  children,
  tone = 'page',
  tight = false,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    alt: 'var(--surface-page-alt)',
    dark: 'var(--surface-dark)',
    raised: 'var(--surface-raised)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${tight ? 'var(--section-py-tight)' : 'var(--section-py)'} var(--space-9)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function Page({
  active,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/logo.png",
    items: NAV,
    active: active,
    onNavigate: onNavigate
  }), children, /*#__PURE__*/React.createElement(ContactPanel, {
    tours: TOURS
  }), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Section,
  Page,
  NAV,
  TOURS,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TourDetail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  FactBar,
  SectionHeading,
  Button,
  HighlightTile,
  TestimonialQuote,
  Icon
} = window.SecretSpotsIcelandDesignSystem_2d8cbc;
const HIGHLIGHTS = [{
  image: 'tile-valahnukamol-sea-cliffs',
  title: 'Valahnúkamöl Sea Cliffs',
  description: 'Stunning ocean views, dramatic sea stacks, and hundreds of nesting seabirds along a jagged shoreline.'
}, {
  image: 'tile-reykjanesviti-lighthouse',
  title: 'Reykjanesviti Lighthouse',
  description: "Iceland's oldest standing lighthouse, perched elegantly on a volcanic hill overlooking raw coastlines."
}, {
  image: 'tile-brimketill-lava-pool',
  title: 'Brimketill Lava Rock Pool',
  description: 'A beautiful natural rock pool carved into black volcanic basalt by the sheer force of the Atlantic ocean.'
}, {
  image: 'tile-krysuvik',
  title: 'Gunnuhver Geothermal Area',
  description: 'A highly active geothermal zone with hissing vents, boiling mud pools, and colorful mineral deposits.'
}, {
  image: 'tile-lake-kleifarvatn',
  title: 'Lake Kleifarvatn',
  description: 'A deep, mysterious lake surrounded by black volcanic sands and dramatic steep mountains.'
}, {
  image: 'tile-krysuvik',
  title: 'Krýsuvík Geothermal Area',
  description: 'A steaming, multi-colored valley of volcanic hot springs, sulfur deposits, and beautiful wooden walking paths.'
}, {
  image: 'tile-hidden-lava-fields',
  title: 'Hidden Lava Fields & Secret Locations',
  description: 'Exclusive access to private off-the-beaten-path locations, hidden cave structures, and ancient untouched volcanic flows.'
}];
const WHO = ['Creative souls longing for distinct geothermal and volcanic backdrops.', 'Photographers searching for dramatic light, steam, ocean stacks and raw geologic textures.', 'Solo travellers or couples seeking a highly personal and exclusive private experience.', 'Families wanting dynamic Icelandic adventure without crowded tour bus timetables.', 'Anyone desiring beautiful, professional landscape portraits from their journey in Iceland.'];
function TourDetail({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Page, {
    active: "Tours",
    onNavigate: onNavigate
  }, /*#__PURE__*/React.createElement(Hero, {
    height: 420,
    image: IMG + 'hero-geothermal.jpg',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The Hidden Side of Reykjanes"),
    subtitle: /*#__PURE__*/React.createElement(React.Fragment, null, "Private Tour & Photography Experience with a Local Guide", /*#__PURE__*/React.createElement("br", null), "Private \xB7 Customized Pick-up from Keflav\xEDk Airport \xB7 Photography Focused \xB7 Custom 4X4")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(FactBar, {
    items: [{
      label: 'Duration',
      value: '7 hours'
    }, {
      label: 'Group',
      value: 'Private only'
    }, {
      label: 'From',
      value: '$1,700 / group'
    }, {
      label: 'Pickup',
      value: 'Reykjavík · Keflavík'
    }, {
      label: 'Season',
      value: 'Year-round'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '440px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'tile-krysuvik.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '4 / 3',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The landscape",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Another planet. One hour from Reykjav\xEDk."),
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "The Reykjanes Peninsula is home to dramatic geothermal activity, steaming mud pools, vast moss-covered lava fields, and rugged volcanic coastlines. It is a region of raw beauty and constant change \u2014 a true representation of Iceland's fiery volcanic spirit, often overlooked by major tour buses.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "This private custom tour allows us to explore the hidden nooks of Reykjanes at your own pace, with professional photography guidance to capture your memories against the most alien backdrops imaginable.")
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 440px',
      gap: 'var(--space-13)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The experience",
    title: "What to Expect on the Reykjanes Tour",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "Prepare for a day of dramatic contrasts. We'll pick you up in our custom-built 4X4 and immediately leave the paved highways behind to venture into active geothermal fields and volcanic craters.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "You'll walk along towering sea cliffs where the roaring Atlantic waves crash against dark basalt pillars, witness boiling hot springs up close, and enjoy gourmet local refreshments prepared right in the wild.")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Get in touch")), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'basalt-sea-cliffs.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      color: 'var(--text-on-dark)',
      textAlign: 'center',
      marginBottom: 'var(--space-11)'
    }
  }, "Reykjanes Highlights"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, HIGHLIGHTS.slice(0, 4).map(h => /*#__PURE__*/React.createElement(HighlightTile, _extends({
    key: h.title
  }, h, {
    image: IMG + h.image + '.jpg'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-9)'
    }
  }, HIGHLIGHTS.slice(4).map(h => /*#__PURE__*/React.createElement(HighlightTile, _extends({
    key: h.title
  }, h, {
    image: IMG + h.image + '.jpg'
  }))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '440px 1fr',
      gap: 'var(--space-13)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'waterfall-camera.jpg',
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-image)',
      aspectRatio: '4 / 5',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The memories",
    title: "Photographing the Reykjanes Peninsula",
    lead: /*#__PURE__*/React.createElement(React.Fragment, null, "As a professional photographer, I don't just guide you: I help you capture the true scale of Iceland's raw landscapes. Whether you are using a professional DSLR, mirrorless system, or simply your smartphone, I'll advise you on composition, lighting, and camera settings.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Additionally, I will capture professional portraits of you throughout the journey, providing high-resolution digital files after the trip so you can always relive the adventure.")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "See the Gallery")))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement(TestimonialQuote, {
    align: "center",
    quote: '"Our afternoon with Luke was wonderful! He is very patient, accommodating and knowledgeable of the area. He took us to so many beautiful places out of the crowds and took AMAZING photos that captured our memories forever. I highly recommend Luke if you are visiting Reykjavik!"',
    author: "Deborah F",
    meta: "United States \xB7 Tripadvisor Review"
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      marginBottom: 'var(--space-9)'
    }
  }, "Who This Reykjanes Tour Is For"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 720
    }
  }, WHO.map(w => /*#__PURE__*/React.createElement("li", {
    key: w,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-500)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dot",
    size: 16
  })), w)))));
}
Object.assign(window, {
  TourDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TourDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Tours.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  SectionHeading,
  TourCard,
  ImageStrip,
  Button,
  ReviewCard,
  Rating
} = window.SecretSpotsIcelandDesignSystem_2d8cbc;
const DAY_TOURS = [{
  image: 'hero-geothermal',
  duration: '7 hours',
  title: 'Secret Reykjanes',
  price: '€149',
  description: 'Volcanic craters, geothermal fields and dramatic sea cliffs near Reykjavik, with professional photography guidance.'
}, {
  image: 'tile-brimketill-lava-pool',
  duration: '10 hours',
  title: 'South Coast & Waterfalls',
  price: '€189',
  description: 'Black sand beaches, basalt sea stacks and the two waterfalls you can walk behind — timed away from the buses.'
}, {
  image: 'tile-lake-kleifarvatn',
  duration: '8 hours',
  title: 'Golden Circle, Quietly',
  price: '€169',
  description: 'The classic route run backwards, with hidden stops and craters most itineraries drive straight past.'
}, {
  image: 'waterfall-camera',
  duration: '6 hours',
  title: 'Northern Lights Night',
  price: '€159',
  description: 'Chasing clear sky with a photographer who knows which valley to be standing in when it starts.'
}];
const MULTI_DAY = [{
  image: 'hero-luke-highlands',
  duration: '3 days',
  title: 'Remote Highlands',
  price: '€1,290',
  description: 'Three days into the interior in a custom 4x4 — river crossings, empty roads and camera time at every stop.'
}, {
  image: 'basalt-sea-cliffs',
  duration: '5 days',
  title: 'Full Ring Road, Private',
  price: '€2,450',
  description: 'The whole island at your pace, with the route rebuilt each morning around the forecast and the light.'
}];
function Tours({
  onNavigate
}) {
  const [booked, setBooked] = React.useState(null);
  return /*#__PURE__*/React.createElement(Page, {
    active: "Tours",
    onNavigate: onNavigate
  }, /*#__PURE__*/React.createElement(Hero, {
    height: 460,
    image: IMG + 'hero-sea-cliffs.jpg',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Iceland Photography Tours \u2014 Book Now"),
    subtitle: "From day trips to multi-day adventures, every tour is fully private and built around you. Choose a classic private Iceland tour or a dedicated photography tour with Luke \u2014 a local guide and professional photographer with nearly 20 years exploring Iceland's most remote landscapes.",
    onPrimary: () => setBooked('Secret Reykjanes')
  }), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Tours in Iceland",
    title: "Private Iceland Day Tours",
    lead: "Every tour is private and shaped around the weather, the light, and what you actually want to see \u2014 with a local guide who knows where the crowds aren't."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-11)'
    }
  }, DAY_TOURS.map(t => /*#__PURE__*/React.createElement(TourCard, _extends({
    key: t.title
  }, t, {
    image: IMG + t.image + '.jpg',
    onClick: () => setBooked(t.title)
  }))))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Tours in Iceland",
    title: "Private Iceland Multi day Tours",
    lead: "Every tour is private and shaped around the weather, the light, and what you actually want to see \u2014 with a local guide who knows where the crowds aren't."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-11)'
    }
  }, MULTI_DAY.map(t => /*#__PURE__*/React.createElement(TourCard, _extends({
    key: t.title,
    layout: "wide"
  }, t, {
    image: IMG + t.image + '.jpg',
    onClick: () => setBooked(t.title)
  }))))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(ImageStrip, {
    ratio: "5 / 4",
    images: ['gallery-puffin', 'gallery-ice-cave-group', 'gallery-seljalandsfoss-group', 'gallery-bruarfoss-pair'].map(n => IMG + n + '.jpg')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      textAlign: 'center'
    }
  }, "Our photography guide & tips"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      textAlign: 'center',
      maxWidth: 520,
      margin: 0
    }
  }, "Every tour is private and shaped around the weather, the light, and what you actually want to see \u2014 with a local guide who knows where the crowds aren't."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "See Our Photography Guide"))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    tight: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      textAlign: 'center',
      marginBottom: 'var(--space-11)'
    }
  }, "What our customers say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'gallery-bruarfoss-pair.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-12) var(--space-11)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'gallery-puffin.jpg',
    alt: "",
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Britta Hormann"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-xs)',
      color: 'var(--amber-600)'
    }
  }, "August 2026"))), /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 13
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-xs)',
      lineHeight: 1.55,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Luke was seriously the best guide we could have asked for! He was knowledgeable, funny, easygoing, and somehow always knew where we should go. O ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: 'underline'
    }
  }, "Read More"))))), booked ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setBooked(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,32,40,.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--panel-pad)',
      maxWidth: 420,
      boxShadow: 'var(--shadow-float)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-display-sm)'
    }
  }, booked), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      margin: 0
    }
  }, "Availability requests go straight to Luke \u2014 usually answered within 24 hours. Scroll down to the enquiry form to send your dates."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => setBooked(null)
  }, "Got it"))) : null);
}
Object.assign(window, {
  Tours
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Tours.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FeaturedOnBar = __ds_scope.FeaturedOnBar;

__ds_ns.ImageStrip = __ds_scope.ImageStrip;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.TestimonialQuote = __ds_scope.TestimonialQuote;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.InquiryForm = __ds_scope.InquiryForm;

__ds_ns.ContactPanel = __ds_scope.ContactPanel;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.FactBar = __ds_scope.FactBar;

__ds_ns.HighlightTile = __ds_scope.HighlightTile;

__ds_ns.IconBullet = __ds_scope.IconBullet;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.TourCard = __ds_scope.TourCard;

})();
