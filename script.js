(() => {
  'use strict';

  /* Icons (inline SVG, 24x24 stroke style) */

  const ICONS = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-1 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.49.49.49 1.284 0 1.774l-1.568 1.568a1.474 1.474 0 0 0-.289.878V14a2 2 0 0 1-2 2h-1.052a1.474 1.474 0 0 0-.878.289l-1.568 1.568a1.255 1.255 0 0 1-1.774 0l-1.568-1.568a1.474 1.474 0 0 0-.878-.289H9a2 2 0 0 1-2-2v-.526a1.474 1.474 0 0 0-.289-.878L5.143 11.07a1.255 1.255 0 0 1 0-1.774l1.568-1.568A1.474 1.474 0 0 0 7 6.852V6a2 2 0 0 1 2-2h.526a1.474 1.474 0 0 0 .878-.289l1.568-1.568a1.255 1.255 0 0 1 1.774 0l1.568 1.568c.23.23.556.338.878.289H16a2 2 0 0 1 2 2v1.052z"/></svg>',
    life: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  };

  /* Menu data */

  const MEGA_MENU_DATA = [
    {
      id: 'style-1',
      label: 'Image grid',
      type: 'image-grid',
      items: [
        {
          title: 'Lorem ipsum',
          desc: 'Dolor sit amet consectetur',
          image: 'grad-1',
          children: [
            { title: 'Adipiscing elit sed' },
            { title: 'Do eiusmod tempor' },
            { title: 'Incididunt ut labore' },
          ],
        },
        { title: 'Adipiscing elit', desc: 'Sed do eiusmod tempor', image: 'grad-2' },
        { title: 'Incididunt ut', desc: 'Labore et dolore magna', image: 'grad-3' },
        { title: 'Aliqua enim', desc: 'Ad minim veniam quis', image: 'grad-4' },
        { title: 'Nostrud exercitation', desc: 'Ullamco laboris nisi', image: 'grad-5' },
        { title: 'Aliquip ex ea', desc: 'Commodo consequat duis', image: 'grad-6' },
        { title: 'Aute irure dolor', desc: 'In reprehenderit voluptate', image: 'grad-7' },
        { title: 'Velit esse cillum', desc: 'Fugiat nulla pariatur', image: 'grad-8' },
      ],
    },
    {
      id: 'style-2',
      label: 'CTA + image grid',
      type: 'cta-image-grid',
      cta: {
        heading: 'Lorem ipsum dolor',
        body: 'Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        linkLabel: 'Lorem ipsum dolor',
        href: '#',
      },
      items: [
        {
          title: 'Excepteur sint',
          desc: 'Occaecat cupidatat non',
          image: 'grad-3',
          children: [
            { title: 'Proident sunt in' },
            { title: 'Culpa qui officia' },
            { title: 'Deserunt mollit anim' },
          ],
        },
        { title: 'Proident sunt', desc: 'In culpa qui officia', image: 'grad-5' },
        { title: 'Deserunt mollit', desc: 'Anim id est laborum', image: 'grad-6' },
        { title: 'Sed ut perspiciatis', desc: 'Unde omnis iste natus', image: 'grad-2' },
        { title: 'Error sit voluptatem', desc: 'Accusantium doloremque', image: 'grad-4' },
        { title: 'Laudantium totam', desc: 'Rem aperiam eaque ipsa', image: 'grad-7' },
      ],
    },
    {
      id: 'style-3',
      label: 'Icon grid',
      type: 'icon-grid',
      items: [
        { title: 'Lorem ipsum', desc: 'Dolor sit amet', icon: 'book' },
        { title: 'Consectetur', desc: 'Adipiscing elit', icon: 'code' },
        {
          title: 'Sed do eiusmod',
          desc: 'Tempor incididunt',
          icon: 'layers',
          // Experimental: this level-3 view keeps the level-2 icon-grid
          // layout (same size/position, no compact morph) instead of the
          // usual compact-dropdown drill-in -- see openSubmenu.
          matchParentStyle: true,
          children: [
            { title: 'Magna aliqua', desc: 'Configuration options', icon: 'gear' },
            { title: 'Enim ad minim', desc: 'Analytics overview', icon: 'chart' },
            { title: 'Veniam quis nostrud', desc: 'Notifications center', icon: 'mail' },
            { title: 'Exercitation ullamco', desc: 'Developer console', icon: 'terminal' },
          ],
        },
        { title: 'Ut labore', desc: 'Et dolore magna', icon: 'puzzle' },
        { title: 'Aliqua enim', desc: 'Ad minim veniam', icon: 'users' },
        {
          title: 'Quis nostrud',
          desc: 'Exercitation ullamco',
          icon: 'map',
          children: [
            { title: 'Laboris nisi ut' },
            { title: 'Aliquip ex ea' },
            { title: 'Commodo consequat' },
          ],
        },
        { title: 'Laboris nisi', desc: 'Ut aliquip ex ea', icon: 'rocket' },
        { title: 'Commodo', desc: 'Consequat duis aute', icon: 'shield' },
      ],
    },
    {
      id: 'style-4',
      label: 'CTA + icon grid',
      type: 'cta-icon-grid',
      cta: {
        heading: 'Lorem ipsum dolor',
        body: 'Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkLabel: 'Lorem ipsum dolor',
        href: '#',
      },
      items: [
        {
          title: 'Irure dolor',
          desc: 'In reprehenderit',
          icon: 'star',
          children: [
            { title: 'Voluptate velit esse' },
            { title: 'Cillum dolore' },
            { title: 'Fugiat nulla pariatur' },
          ],
        },
        { title: 'Voluptate velit', desc: 'Esse cillum dolore', icon: 'users' },
        { title: 'Fugiat nulla', desc: 'Pariatur excepteur', icon: 'shield' },
        { title: 'Sint occaecat', desc: 'Cupidatat non proident', icon: 'mail' },
        { title: 'Sunt in culpa', desc: 'Qui officia deserunt', icon: 'puzzle' },
        { title: 'Mollit anim', desc: 'Id est laborum', icon: 'life' },
      ],
    },
    {
      id: 'style-5',
      label: 'Compact icons',
      type: 'compact-icon',
      items: [
        {
          title: 'Lorem ipsum dolor',
          icon: 'rocket',
          children: [
            { title: 'Sit amet consectetur' },
            { title: 'Adipiscing elit sed' },
            { title: 'Do eiusmod tempor' },
          ],
        },
        { title: 'Sit amet consectetur', icon: 'code' },
        { title: 'Adipiscing elit sed', icon: 'layers' },
        { title: 'Do eiusmod tempor', icon: 'terminal' },
        { title: 'Incididunt ut labore', icon: 'puzzle' },
      ],
    },
    {
      id: 'style-6',
      label: 'Compact links',
      type: 'compact-text',
      items: [
        {
          title: 'Lorem ipsum dolor sit',
          children: [
            { title: 'Amet consectetur' },
            { title: 'Adipiscing elit sed' },
            { title: 'Do eiusmod tempor' },
          ],
        },
        { title: 'Amet consectetur' },
        { title: 'Adipiscing elit sed do' },
        { title: 'Eiusmod tempor incididunt' },
        { title: 'Ut labore et dolore' },
      ],
    },
  ];

  const COMPACT_TYPES = new Set(['compact-icon', 'compact-text']);
  const COMPACT_WIDTH = 320;

  /* DOM references & state */

  const navEl = document.getElementById('floating-mega-nav');
  const parentsEl = document.getElementById('floating-mega-nav-parents');
  const barEl = navEl.querySelector('.floating-mega-nav__bar');
  const panelEl = document.getElementById('floating-mega-nav-panel');
  const panelInnerEl = document.getElementById('floating-mega-nav-panel-inner');

  const menuToggleEl = document.getElementById('floating-mega-nav-menu-toggle');
  const mobileEl = document.getElementById('floating-mega-nav-mobile');
  const mobileParentsEl = document.getElementById('floating-mega-nav-mobile-parents');
  const mobileChildrenEl = document.getElementById('floating-mega-nav-mobile-children');
  const mobileSubchildrenEl = document.getElementById('floating-mega-nav-mobile-subchildren');
  const mobileBackBtn = document.getElementById('floating-mega-nav-mobile-back');
  const mobileBackLabelEl = document.getElementById('floating-mega-nav-mobile-back-label');

  let activeMenuId = null;
  let closeTimer = null;
  let suppressFocusOpen = false;
  let switchTimeline = null;
  let switchGhost = null;
  let activeSubmenu = null;
  let submenuParentMenu = null;

  // Smooth-scroll state: scrollState.y is the position we're easing the
  // page's actual scroll toward; scrollTargetY is the requested
  // destination (accumulated across wheel events so a flurry of small
  // scrolls keeps redirecting the same tween rather than restarting it).
  const scrollState = { y: 0 };
  let scrollTargetY = 0;
  let isSmoothScrolling = false;

  // Cancels any in-flight switch slide and removes its leftover outgoing
  // clone / inline positioning, returning panelInnerEl to its normal,
  // statically-positioned state.
  function cancelSwitchTransition() {
    if (switchTimeline) {
      switchTimeline.kill();
      switchTimeline = null;
    }
    if (switchGhost) {
      switchGhost.remove();
      switchGhost = null;
    }
    gsap.set(panelInnerEl, { clearProps: 'position,top,left,width,xPercent,opacity,x' });
  }
  const CLOSE_DELAY = 200;

  // Matches --panel-border (#ececef) at full and zero alpha, so the bar's
  // bottom border can fade out in sync with its radius morph.
  const BAR_BORDER_COLOR = 'rgba(236, 236, 239, 1)';
  const BAR_BORDER_COLOR_TRANSPARENT = 'rgba(236, 236, 239, 0)';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Render: nav parent buttons */

  function renderNav() {
    MEGA_MENU_DATA.forEach((menu) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'floating-mega-nav__parent';
      btn.id = `parent-${menu.id}`;
      btn.textContent = menu.label;
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', 'floating-mega-nav-panel');
      btn.dataset.menuId = menu.id;
      btn.dataset.type = menu.type;
      li.appendChild(btn);
      parentsEl.appendChild(li);
    });
  }

  /* Render: mobile menu */

  function renderMobileNav() {
    MEGA_MENU_DATA.forEach((menu) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'floating-mega-nav__mobile-parent';
      btn.textContent = menu.label;
      btn.dataset.menuId = menu.id;

      const chevron = document.createElement('span');
      chevron.innerHTML = ICONS.chevronRight;
      btn.appendChild(chevron.firstChild);

      li.appendChild(btn);
      mobileParentsEl.appendChild(li);
    });
  }

  /* Render: panel content builders */

  function buildMegaCard(item) {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'mega-card';

    const thumb = document.createElement('div');
    thumb.className = `mega-card__thumb thumb--${item.image}`;
    a.appendChild(thumb);

    const body = document.createElement('div');
    body.className = 'mega-card__body';
    a.appendChild(body);

    const title = document.createElement('p');
    title.className = 'mega-card__title';
    title.textContent = item.title;
    body.appendChild(title);

    if (item.desc) {
      const desc = document.createElement('p');
      desc.className = 'mega-card__desc';
      desc.textContent = item.desc;
      body.appendChild(desc);
    }

    appendDrillChevron(a, item, 'mega-card');

    return a;
  }

  function buildIconLink(item) {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'icon-link';

    const icon = document.createElement('span');
    icon.className = 'icon-link__icon';
    icon.innerHTML = ICONS[item.icon] || '';
    a.appendChild(icon);

    const text = document.createElement('span');
    text.className = 'icon-link__text';

    const title = document.createElement('span');
    title.className = 'icon-link__title';
    title.textContent = item.title;
    text.appendChild(title);

    if (item.desc) {
      const desc = document.createElement('span');
      desc.className = 'icon-link__desc';
      desc.textContent = item.desc;
      text.appendChild(desc);
    }

    a.appendChild(text);

    appendDrillChevron(a, item, 'icon-link');

    return a;
  }

  // Appends a chevron to indicate a level-3 drill-in, for any item that has
  // a `children` array. `blockName` is the BEM block whose `--has-children`
  // modifier and `__chevron` element classes get used.
  function appendDrillChevron(el, item, blockName) {
    if (!item.children) return;
    el.classList.add(`${blockName}--has-children`);
    const chevron = document.createElement('span');
    chevron.className = `${blockName}__chevron`;
    chevron.innerHTML = ICONS.chevronRight;
    el.appendChild(chevron);
  }

  function buildCompactTextLink(item) {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'compact-text-link';

    const text = document.createElement('span');
    text.textContent = item.title;
    a.appendChild(text);

    appendDrillChevron(a, item, 'compact-text-link');

    return a;
  }

  // Third-level "drill in" view: a back row pointing at the level-2 item
  // that was clicked, followed by its children as a flat link list.
  function buildSubmenuBack(label, onBack) {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'submenu-back';

    const chevron = document.createElement('span');
    chevron.className = 'submenu-back__icon';
    chevron.innerHTML = ICONS.chevronRight;
    a.appendChild(chevron);

    const text = document.createElement('span');
    text.textContent = label;
    a.appendChild(text);

    a.addEventListener('click', (e) => {
      e.preventDefault();
      onBack();
    });

    return a;
  }

  function renderSubmenuContent(item) {
    const frag = document.createDocumentFragment();
    frag.appendChild(buildSubmenuBack(item.title, closeSubmenu));
    item.children.forEach((child) => frag.appendChild(buildCompactTextLink(child)));
    return frag;
  }

  // Experimental alternative for `item.matchParentStyle`: instead of the
  // usual compact flat list, keeps the level-2 menu's own icon-grid layout
  // for the level-3 view, rendering children as icon-links.
  function renderSubmenuContentMatched(item, menu) {
    const frag = document.createDocumentFragment();
    frag.appendChild(buildSubmenuBack(item.title, closeSubmenu));
    item.children.forEach((child) => frag.appendChild(buildDrillable(buildIconLink, child, menu)));
    return frag;
  }

  function buildCta(cta) {
    const div = document.createElement('div');
    div.className = 'mega-cta';

    const heading = document.createElement('p');
    heading.className = 'mega-cta__heading';
    heading.textContent = cta.heading;
    div.appendChild(heading);

    const body = document.createElement('p');
    body.className = 'mega-cta__body';
    body.textContent = cta.body;
    div.appendChild(body);

    const link = document.createElement('a');
    link.className = 'mega-cta__link';
    link.href = cta.href || '#';
    link.textContent = cta.linkLabel;
    div.appendChild(link);

    return div;
  }

  // Mobile children/subchildren views always render a flat single-column
  // list of items, regardless of the desktop layout. The cta block
  // (heading/paragraph/link), when present, is prepended separately in
  // openMobileChildren. Items with their own `children` get a drill
  // chevron and open the subchildren pane instead of navigating.
  function buildMobileChild(item) {
    let el;
    if (item.icon) el = buildIconLink(item);
    else if (item.image) el = buildMegaCard(item);
    else el = buildCompactTextLink(item);

    if (item.children) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openMobileSubchildren(item);
      });
    }

    return el;
  }

  // Builds a level-2 item with `buildFn` and, if it has a `children` array,
  // wires its click to drill into the level-3 submenu instead of navigating.
  function buildDrillable(buildFn, item, menu) {
    const el = buildFn(item);
    if (item.children) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openSubmenu(item, menu);
      });
    }
    return el;
  }

  function renderPanelContent(menu) {
    const frag = document.createDocumentFragment();

    switch (menu.type) {
      case 'image-grid': {
        menu.items.forEach((item) => frag.appendChild(buildDrillable(buildMegaCard, item, menu)));
        break;
      }

      case 'cta-image-grid': {
        frag.appendChild(buildCta(menu.cta));
        const itemsWrap = document.createElement('div');
        itemsWrap.className = 'cta-image-grid__items';
        menu.items.forEach((item) => itemsWrap.appendChild(buildDrillable(buildMegaCard, item, menu)));
        frag.appendChild(itemsWrap);
        break;
      }

      case 'icon-grid': {
        menu.items.forEach((item) => frag.appendChild(buildDrillable(buildIconLink, item, menu)));
        break;
      }

      case 'cta-icon-grid': {
        frag.appendChild(buildCta(menu.cta));
        const itemsWrap = document.createElement('div');
        itemsWrap.className = 'cta-icon-grid__items';
        menu.items.forEach((item) => itemsWrap.appendChild(buildDrillable(buildIconLink, item, menu)));
        frag.appendChild(itemsWrap);
        break;
      }

      case 'compact-icon': {
        menu.items.forEach((item) => frag.appendChild(buildDrillable(buildIconLink, item, menu)));
        break;
      }

      case 'compact-text': {
        menu.items.forEach((item) => frag.appendChild(buildDrillable(buildCompactTextLink, item, menu)));
        break;
      }

      default:
        break;
    }

    return frag;
  }

  function setPanelContent(className, frag) {
    panelInnerEl.innerHTML = '';
    panelInnerEl.className = `floating-mega-nav__panel-inner ${className}`;
    panelInnerEl.appendChild(frag);

    // Hide stagger targets synchronously so they never paint at full
    // opacity before the entrance animation takes over.
    getStaggerTargets().forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
    });
  }

  function swapContent(menu) {
    setPanelContent(`panel-content--${menu.type}`, renderPanelContent(menu));
  }

  /* Geometry helpers */

  function isCompactType(type) {
    return COMPACT_TYPES.has(type);
  }

  function measureContentHeight(menu, width) {
    return measureFragmentHeight(`panel-content--${menu.type}`, renderPanelContent(menu), width);
  }

  function measureFragmentHeight(className, frag, width) {
    const probe = document.createElement('div');
    probe.className = `floating-mega-nav__panel-inner ${className}`;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.pointerEvents = 'none';
    probe.style.width = `${width}px`;
    probe.appendChild(frag);
    document.body.appendChild(probe);
    const height = probe.offsetHeight;
    document.body.removeChild(probe);
    return height;
  }

  function getParentOffsetX(parentBtn, navRect, compactWidth) {
    const btnRect = parentBtn.getBoundingClientRect();
    let x = btnRect.left - navRect.left;
    x = Math.max(0, Math.min(x, navRect.width - compactWidth));
    return x;
  }

  function updateConnectorPosition(x, width, navRect) {
    const notchLeft = Math.max(0, -x);
    const notchRight = Math.min(width - 10, navRect.width - x - 10);
    panelEl.style.setProperty('--notch-left', `${notchLeft}px`);
    panelEl.style.setProperty('--notch-right', `${notchRight}px`);
  }

  /* Open / close */

  function getStaggerTargets() {
    return panelInnerEl.querySelectorAll('.mega-card, .icon-link, .compact-text-link, .mega-cta');
  }

  // Below this breakpoint the bar's corners are flush (0) via CSS, so the
  // radius morph would just flash a corner that should stay square.
  const MOBILE_BREAKPOINT = window.matchMedia('(max-width: 860px)');

  // Morphs the bar's bottom corners + bottom border so it attaches to the
  // panel in lockstep with the panel's own opening/morph tween.
  function attachBar(compact, duration, ease) {
    gsap.to(barEl, {
      borderBottomLeftRadius: MOBILE_BREAKPOINT.matches ? '0px' : compact ? '10px' : '0px',
      borderBottomRightRadius: MOBILE_BREAKPOINT.matches ? '0px' : compact ? '10px' : '0px',
      borderBottomColor: BAR_BORDER_COLOR_TRANSPARENT,
      duration,
      ease,
    });
  }

  // Restores the bar's bottom corners + border, in sync with the panel's
  // closing tween. Clears the inline styles on completion so the bar falls
  // back to its CSS resting state -- 0 on mobile, --nav-radius on desktop --
  // which keeps it correct even if the viewport is resized afterwards.
  function detachBar(duration, ease) {
    gsap.to(barEl, {
      borderBottomLeftRadius: MOBILE_BREAKPOINT.matches ? '0px' : '10px',
      borderBottomRightRadius: MOBILE_BREAKPOINT.matches ? '0px' : '10px',
      borderBottomColor: BAR_BORDER_COLOR,
      duration,
      ease,
      onComplete: () => {
        gsap.set(barEl, { clearProps: 'borderBottomLeftRadius,borderBottomRightRadius,borderBottomColor' });
      },
    });
  }

  function staggerChildren() {
    const items = getStaggerTargets();
    if (!items.length) return;
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: 'power3.out',
      stagger: 0.03,
      clearProps: 'transform',
    });
  }

  // Reveals the (stagger-hidden) children instantly, for when the panel
  // slide itself is providing the entrance motion. Items like .mega-card
  // have a CSS transition on `transform`, so simply clearing the inline
  // translateY would still animate -- transitions are suppressed for one
  // frame while the values snap into place.
  function showStaggerTargetsInstantly() {
    const items = getStaggerTargets();
    if (!items.length) return;
    gsap.set(items, { transition: 'none' });
    gsap.set(items, { opacity: 1, y: 0, clearProps: 'transform' });
    requestAnimationFrame(() => gsap.set(items, { clearProps: 'transition' }));
  }

  function openMenu(menuId) {
    const menu = MEGA_MENU_DATA.find((m) => m.id === menuId);
    if (!menu) return;

    // Re-entering the already-active parent (from its own children, from
    // outside the navbar, or from the logo) shouldn't replay the open
    // animation -- the panel is already showing this menu's content.
    if (activeMenuId === menuId) return;

    const parentBtn = document.getElementById(`parent-${menu.id}`);
    const compact = isCompactType(menu.type);
    const wasOpen = activeMenuId !== null;
    const isSwitch = wasOpen && activeMenuId !== menuId;

    // Cancel any in-flight switch slide outright (including its pending
    // content-swap step and outgoing clone) so rapid hovering across
    // parents can't leave the panel mid-swap with stale, hidden content.
    cancelSwitchTransition();

    // Opening any parent (including re-opening the same one from closed)
    // always lands on its top-level content, abandoning any open submenu.
    activeSubmenu = null;
    submenuParentMenu = null;

    document.querySelectorAll('.floating-mega-nav__parent').forEach((b) => {
      b.setAttribute('aria-expanded', b === parentBtn ? 'true' : 'false');
    });
    panelEl.setAttribute('aria-hidden', 'false');

    navEl.classList.toggle('is-mega', !compact);
    navEl.classList.toggle('is-compact', compact);

    const navRect = navEl.getBoundingClientRect();
    const targetWidth = compact ? COMPACT_WIDTH : navRect.width;
    const targetHeight = measureContentHeight(menu, targetWidth);
    const targetX = compact ? getParentOffsetX(parentBtn, navRect, COMPACT_WIDTH) : 0;

    panelEl.classList.toggle('is-compact', compact);
    if (compact) {
      panelEl.classList.add('is-attached');
      updateConnectorPosition(targetX, targetWidth, navRect);
    } else {
      panelEl.classList.remove('is-attached');
    }

    if (prefersReducedMotion) {
      gsap.set(panelEl, { width: targetWidth, height: targetHeight, x: targetX, opacity: 1 });
      gsap.set(panelInnerEl, { clearProps: 'opacity,x' });
      gsap.set(barEl, {
        borderBottomLeftRadius: compact ? '10px' : '0px',
        borderBottomRightRadius: compact ? '10px' : '0px',
        borderBottomColor: BAR_BORDER_COLOR_TRANSPARENT,
      });
      panelEl.classList.add('is-open');
      swapContent(menu);
      gsap.set(getStaggerTargets(), { opacity: 1, y: 0, clearProps: 'transform' });
      activeMenuId = menuId;
      return;
    }

    if (!isSwitch) {
      gsap.killTweensOf(panelEl);
      gsap.killTweensOf(panelInnerEl);
      gsap.killTweensOf(barEl);
      gsap.set(panelInnerEl, { clearProps: 'opacity,x' });
      panelEl.classList.add('is-open');
      swapContent(menu);
      gsap.fromTo(
        panelEl,
        { width: compact ? 0 : navRect.width, height: 0, x: targetX, opacity: 0 },
        {
          width: targetWidth,
          height: targetHeight,
          x: targetX,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        }
      );
      attachBar(compact, 0.4, 'power3.out');
      staggerChildren();
    } else {
      // Slide direction follows the new parent's position relative to the
      // previously active one -- the outgoing content exits toward it while
      // the replacement enters from that side, as a continuous two-pane
      // slide rather than the previous fade.
      const prevBtn = document.getElementById(`parent-${activeMenuId}`);
      const direction = prevBtn && parentBtn.getBoundingClientRect().left < prevBtn.getBoundingClientRect().left ? -1 : 1;

      slidePanelTo({
        contentFn: () => renderPanelContent(menu),
        className: `panel-content--${menu.type}`,
        targetWidth,
        targetHeight,
        targetX,
        compact,
        direction,
      });
    }

    activeMenuId = menuId;
  }

  // Slides the panel's content sideways to a new pane while the panel
  // itself morphs to the target size/position -- used both for switching
  // between parents and for drilling into/out of a level-3 submenu.
  // Snapshots the current content as an outgoing pane, swaps the real
  // panel-inner to the new content as the incoming pane on the opposite
  // side, then animates both in lockstep with the panel resize. Both panes
  // keep their own natural width (current vs. target) rather than
  // stretching to the panel's animating width -- otherwise a mega grid
  // forced into a narrower panel reflows into a tall stack that spills over
  // the incoming content. Both panes also travel the same pixel distance --
  // the larger of the two widths -- so the narrower pane always clears the
  // panel's widest point during the resize instead of lingering visible
  // inside it.
  function slidePanelTo({ contentFn, className, targetWidth, targetHeight, targetX, compact, direction, duration = 0.5 }) {
    // Clears out any leftover outgoing clone / in-flight slide from a
    // previous call so rapid drilling in/out can't stack ghosts.
    cancelSwitchTransition();
    gsap.killTweensOf(panelEl);
    gsap.killTweensOf(panelInnerEl);
    gsap.killTweensOf(barEl);
    // The panel may still be mid fade-in from the previous open; make sure
    // it's fully opaque before morphing into the new shape.
    gsap.set(panelEl, { opacity: 1 });

    panelEl.classList.toggle('is-compact', compact);
    panelEl.classList.toggle('is-attached', compact);
    navEl.classList.toggle('is-mega', !compact);
    navEl.classList.toggle('is-compact', compact);

    const startWidth = panelEl.getBoundingClientRect().width;
    const slideDistance = Math.max(startWidth, targetWidth);

    const outgoing = panelInnerEl.cloneNode(true);
    outgoing.removeAttribute('id');
    panelEl.appendChild(outgoing);
    switchGhost = outgoing;
    gsap.set(outgoing, { position: 'absolute', top: 0, left: 0, width: startWidth, x: 0 });

    // Replacing panel-inner's content discards whatever was focused inside
    // it (e.g. the drill-in link that was just clicked). That fires a
    // synchronous focusout with no relatedTarget, which the nav's
    // focusout handler reads as "focus left the nav" and schedules a
    // close -- cancel that now that the new content is in place.
    setPanelContent(className, contentFn());
    cancelClose();
    // The slide handles the entrance for the whole group, so reveal the
    // (otherwise stagger-hidden) children immediately instead of
    // animating them in individually.
    showStaggerTargetsInstantly();
    gsap.set(panelInnerEl, { position: 'absolute', top: 0, left: 0, width: targetWidth, x: direction * slideDistance });

    const tl = gsap.timeline({
      onComplete: () => {
        outgoing.remove();
        switchGhost = null;
        gsap.set(panelInnerEl, { clearProps: 'position,top,left,width,x' });
      },
    });
    switchTimeline = tl;
    tl.to(outgoing, { x: direction * -slideDistance, duration, ease: 'power3.out' }, 0);
    tl.to(panelInnerEl, { x: 0, duration, ease: 'power3.out' }, 0);
    tl.to(panelEl, { width: targetWidth, height: targetHeight, x: targetX, duration, ease: 'power3.out' }, 0);
    attachBar(compact, duration, 'power3.out');

    return tl;
  }

  // Drills into a level-3 view for an item that has its own children --
  // slides the panel content to a back-link + flat list of the item's
  // children. A level-3 view is always just a column of links, so the
  // panel morphs into a compact dropdown (regardless of the level-2
  // menu's own layout), anchored under that menu's nav button -- the same
  // anchor a compact-type menu would use.
  function openSubmenu(item, menu) {
    if (activeMenuId === null || !item.children) return;

    const navRect = navEl.getBoundingClientRect();

    // Experimental: items flagged `matchParentStyle` keep the level-2
    // menu's own layout/size instead of morphing to a compact dropdown.
    const matched = item.matchParentStyle && !isCompactType(menu.type);

    let className, contentFn, targetWidth, targetX, compact;
    if (matched) {
      className = `panel-content--${menu.type}`;
      contentFn = () => renderSubmenuContentMatched(item, menu);
      targetWidth = navRect.width;
      targetX = 0;
      compact = false;
    } else {
      className = 'panel-content--submenu';
      contentFn = () => renderSubmenuContent(item);
      targetWidth = COMPACT_WIDTH;
      const parentBtn = document.getElementById(`parent-${menu.id}`);
      targetX = getParentOffsetX(parentBtn, navRect, COMPACT_WIDTH);
      compact = true;
    }
    const targetHeight = measureFragmentHeight(className, contentFn(), targetWidth);

    activeSubmenu = item;
    submenuParentMenu = menu;

    if (compact) {
      updateConnectorPosition(targetX, targetWidth, navRect);
    }

    slidePanelTo({
      contentFn,
      className,
      targetWidth,
      targetHeight,
      targetX,
      compact,
      direction: 1,
    });
  }

  // Returns from a level-3 submenu back to its parent menu's top-level
  // content, sliding in from the opposite side of openSubmenu.
  function closeSubmenu() {
    if (!activeSubmenu || !submenuParentMenu) return;

    const menu = submenuParentMenu;
    const compact = isCompactType(menu.type);
    const navRect = navEl.getBoundingClientRect();
    const targetWidth = compact ? COMPACT_WIDTH : navRect.width;
    const targetHeight = measureContentHeight(menu, targetWidth);
    const parentBtn = document.getElementById(`parent-${menu.id}`);
    const targetX = compact ? getParentOffsetX(parentBtn, navRect, COMPACT_WIDTH) : 0;

    activeSubmenu = null;
    submenuParentMenu = null;

    if (compact) {
      updateConnectorPosition(targetX, targetWidth, navRect);
    }

    slidePanelTo({
      contentFn: () => renderPanelContent(menu),
      className: `panel-content--${menu.type}`,
      targetWidth,
      targetHeight,
      targetX,
      compact,
      direction: -1,
    });
  }

  function closePanel() {
    if (activeMenuId === null) return;

    document.querySelectorAll('.floating-mega-nav__parent').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
    });
    panelEl.setAttribute('aria-hidden', 'true');
    activeMenuId = null;
    activeSubmenu = null;
    submenuParentMenu = null;

    cancelSwitchTransition();

    if (prefersReducedMotion) {
      panelEl.classList.remove('is-open', 'is-attached', 'is-compact');
      navEl.classList.remove('is-mega', 'is-compact');
      gsap.set(panelEl, { clearProps: 'width,height,x,opacity' });
      gsap.set(barEl, { clearProps: 'borderBottomLeftRadius,borderBottomRightRadius,borderBottomColor' });
      return;
    }

    gsap.killTweensOf(panelEl);
    gsap.killTweensOf(panelInnerEl);
    gsap.killTweensOf(barEl);

    detachBar(0.25, 'power2.in');

    gsap.to(panelEl, {
      opacity: 0,
      height: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        panelEl.classList.remove('is-open', 'is-attached', 'is-compact');
        navEl.classList.remove('is-mega', 'is-compact');
        gsap.set(panelEl, { clearProps: 'width,height,x,opacity' });
        gsap.set(barEl, { clearProps: 'borderBottomLeftRadius,borderBottomRightRadius,borderBottomColor' });
      },
    });
  }

  function scheduleClose() {
    // A drilled-in (level-3) view is anchored to its level-2 parent's nav
    // button, which can land far from wherever the mouse currently is --
    // so once a submenu is open, hovering off the nav no longer closes it.
    // It stays "pinned" until the user explicitly backs out, clicks
    // elsewhere, or presses Escape.
    if (activeSubmenu !== null) return;
    clearTimeout(closeTimer);
    closeTimer = setTimeout(closePanel, CLOSE_DELAY);
  }

  /* Mobile menu open / close / drill-down */

  function openMobileMenu() {
    mobileEl.classList.add('is-open');
    mobileEl.setAttribute('aria-hidden', 'false');
    menuToggleEl.setAttribute('aria-expanded', 'true');

    if (prefersReducedMotion) {
      gsap.set(barEl, {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderBottomColor: BAR_BORDER_COLOR_TRANSPARENT,
      });
      return;
    }
    gsap.killTweensOf(barEl);
    attachBar(false, 0.3, 'power2.out');
  }

  function closeMobileMenu() {
    mobileEl.classList.remove('is-open', 'is-showing-children', 'is-showing-subchildren');
    mobileBackBtn.setAttribute('tabindex', '-1');
    mobileBackLabelEl.textContent = 'Back';
    mobileEl.setAttribute('aria-hidden', 'true');
    menuToggleEl.setAttribute('aria-expanded', 'false');

    if (prefersReducedMotion) {
      gsap.set(barEl, { clearProps: 'borderBottomLeftRadius,borderBottomRightRadius,borderBottomColor' });
      return;
    }
    gsap.killTweensOf(barEl);
    detachBar(0.25, 'power2.in');
  }

  function openMobileChildren(menuId) {
    const menu = MEGA_MENU_DATA.find((m) => m.id === menuId);
    if (!menu) return;

    mobileChildrenEl.innerHTML = '';
    if (menu.cta) mobileChildrenEl.appendChild(buildCta(menu.cta));
    menu.items.forEach((item) => mobileChildrenEl.appendChild(buildMobileChild(item)));
    mobileChildrenEl.parentElement.scrollTop = 0;

    mobileEl.classList.add('is-showing-children');
    mobileBackBtn.removeAttribute('tabindex');
    // preventScroll avoids the browser snapping the off-screen (translateX)
    // back button into view, which looked like a bounce mid-slide.
    mobileBackBtn.focus({ preventScroll: true });
  }

  function closeMobileChildren() {
    // Step back exactly one level: from subchildren to children, or from
    // children to parents.
    if (mobileEl.classList.contains('is-showing-subchildren')) {
      closeMobileSubchildren();
      return;
    }
    mobileEl.classList.remove('is-showing-children');
    mobileBackBtn.setAttribute('tabindex', '-1');
  }

  function closeMobileSubchildren() {
    mobileEl.classList.remove('is-showing-subchildren');
    mobileBackLabelEl.textContent = 'Back';
    mobileBackBtn.focus({ preventScroll: true });
  }

  // Truncates a label to at most 4 words, appending an ellipsis if any
  // were dropped.
  function truncateLabel(label) {
    const words = label.split(' ');
    if (words.length <= 4) return label;
    return `${words.slice(0, 4).join(' ')}…`;
  }

  function openMobileSubchildren(item) {
    mobileSubchildrenEl.innerHTML = '';
    item.children.forEach((child) => mobileSubchildrenEl.appendChild(buildMobileChild(child)));
    mobileSubchildrenEl.parentElement.scrollTop = 0;

    mobileEl.classList.add('is-showing-subchildren');
    mobileBackLabelEl.textContent = truncateLabel(item.title);
    mobileBackBtn.focus({ preventScroll: true });
  }

  function cancelClose() {
    clearTimeout(closeTimer);
    closeTimer = null;
  }

  /* Smooth scroll */

  function maxScrollY() {
    return document.documentElement.scrollHeight - window.innerHeight;
  }

  // Eases the page's scroll position to `y` with the given GSAP duration
  // and ease, redirecting any tween already in flight rather than
  // stacking a new one.
  function animateScrollTo(y, { duration = 1, ease = 'power2.inOut' } = {}) {
    scrollTargetY = gsap.utils.clamp(0, maxScrollY(), y);

    if (prefersReducedMotion) {
      window.scrollTo(0, scrollTargetY);
      scrollState.y = scrollTargetY;
      return;
    }

    isSmoothScrolling = true;
    gsap.to(scrollState, {
      y: scrollTargetY,
      duration,
      ease,
      overwrite: true,
      onUpdate: () => window.scrollTo(0, scrollState.y),
      onComplete: () => {
        isSmoothScrolling = false;
      },
    });
  }

  // Replaces native wheel scrolling with a GSAP-eased version: each wheel
  // event nudges a running target rather than jumping the page directly,
  // so scrolling decelerates smoothly instead of stopping instantly.
  function initSmoothScroll() {
    if (prefersReducedMotion) return;

    scrollState.y = window.scrollY;
    scrollTargetY = window.scrollY;

    window.addEventListener(
      'wheel',
      (e) => {
        if (e.ctrlKey) return; // let pinch-zoom through untouched
        e.preventDefault();
        animateScrollTo(scrollTargetY + e.deltaY, { duration: 0.9, ease: 'power2.out' });
      },
      { passive: false }
    );

    // Keep our tracked position in sync with scrolling we didn't drive
    // ourselves (keyboard, scrollbar drag, touch), so the next wheel event
    // continues from where the page actually is.
    window.addEventListener('scroll', () => {
      if (isSmoothScrolling) return;
      scrollState.y = window.scrollY;
      scrollTargetY = window.scrollY;
    });
  }

  /* Event bindings */

  function bindEvents() {
    parentsEl.querySelectorAll('.floating-mega-nav__parent').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        cancelClose();
        openMenu(btn.dataset.menuId);
      });
      btn.addEventListener('focus', () => {
        if (suppressFocusOpen) {
          suppressFocusOpen = false;
          return;
        }
        cancelClose();
        openMenu(btn.dataset.menuId);
      });
    });

    navEl.addEventListener('mouseleave', () => {
      scheduleClose();
    });

    navEl.addEventListener('mouseenter', () => {
      cancelClose();
    });

    panelEl.addEventListener('mouseenter', () => {
      cancelClose();
    });

    navEl.addEventListener('focusout', (e) => {
      const next = e.relatedTarget;
      if (!next || !navEl.contains(next)) {
        scheduleClose();
      }
    });

    // Submenus are "pinned" (see scheduleClose) so they don't disappear
    // when the mouse can't reach their new, anchored position -- clicking
    // anywhere outside the nav is how they get dismissed instead.
    document.addEventListener('click', (e) => {
      // Use composedPath() rather than navEl.contains(e.target): a click on
      // a drill-in link re-renders the panel and removes that link from the
      // DOM before this (bubbled) listener runs, so e.target would already
      // be detached and "contains" would wrongly report false.
      if (activeSubmenu !== null && !e.composedPath().includes(navEl)) {
        closePanel();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;

      if (activeMenuId !== null) {
        const id = activeMenuId;
        closePanel();
        const btn = document.getElementById(`parent-${id}`);
        if (btn) {
          suppressFocusOpen = true;
          btn.focus();
        }
      }

      if (mobileEl.classList.contains('is-open')) {
        if (mobileEl.classList.contains('is-showing-subchildren')) {
          closeMobileSubchildren();
        } else if (mobileEl.classList.contains('is-showing-children')) {
          closeMobileChildren();
        } else {
          closeMobileMenu();
          menuToggleEl.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (activeMenuId !== null) {
        closePanel();
      }
      if (mobileEl.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Mobile menu
    menuToggleEl.addEventListener('click', () => {
      if (mobileEl.classList.contains('is-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileParentsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.floating-mega-nav__mobile-parent');
      if (!btn) return;
      openMobileChildren(btn.dataset.menuId);
    });

    mobileBackBtn.addEventListener('click', () => {
      closeMobileChildren();
    });

    document.addEventListener('click', (e) => {
      if (!mobileEl.classList.contains('is-open')) return;
      if (navEl.contains(e.target)) return;
      closeMobileMenu();
    });

    // Hero scroll-down button -- eases the page down to the docs section.
    const scrollDownBtn = document.getElementById('hero-scroll-down');
    const docsEl = document.getElementById('docs');
    scrollDownBtn.addEventListener('click', () => {
      if (prefersReducedMotion) {
        docsEl.scrollIntoView();
        return;
      }
      animateScrollTo(docsEl.getBoundingClientRect().top + window.scrollY, { duration: 1, ease: 'power2.inOut' });
    });

    // License modal
    const licenseLink = document.getElementById('license-link');
    const licenseModal = document.getElementById('license-modal');
    const licenseOverlay = document.getElementById('license-modal-overlay');
    const licenseDialog = licenseModal.querySelector('.license-modal__dialog');
    const licenseCloseBtn = document.getElementById('license-modal-close');

    licenseLink.addEventListener('click', openLicenseModal);
    licenseCloseBtn.addEventListener('click', closeLicenseModal);
    licenseOverlay.addEventListener('click', closeLicenseModal);

    function openLicenseModal() {
      licenseModal.classList.add('is-open');
      licenseModal.setAttribute('aria-hidden', 'false');

      if (prefersReducedMotion) {
        licenseCloseBtn.focus();
        return;
      }
      gsap.killTweensOf([licenseOverlay, licenseDialog]);
      gsap.fromTo(licenseOverlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      gsap.fromTo(
        licenseDialog,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
      licenseCloseBtn.focus();
    }

    function closeLicenseModal() {
      if (!licenseModal.classList.contains('is-open')) return;
      licenseModal.setAttribute('aria-hidden', 'true');
      licenseLink.focus();

      if (prefersReducedMotion) {
        licenseModal.classList.remove('is-open');
        return;
      }
      gsap.killTweensOf([licenseOverlay, licenseDialog]);
      gsap.to(licenseOverlay, { opacity: 0, duration: 0.2, ease: 'power2.in' });
      gsap.to(licenseDialog, {
        opacity: 0,
        y: 16,
        scale: 0.96,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => licenseModal.classList.remove('is-open'),
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && licenseModal.classList.contains('is-open')) {
        closeLicenseModal();
      }
    });
  }

  /* Init */

  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderMobileNav();
    bindEvents();
    initSmoothScroll();
  });
})();
