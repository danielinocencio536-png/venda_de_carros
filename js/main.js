/* =====================================================
   LA STRADA — main.js
   ===================================================== */

(function () {
    'use strict';

    /* ---------- i18n dictionary ---------- */
    const i18n = {
        EN: {
            'nav.menu': 'MENU',
            'nav.contact': 'CONTACT',
            'hero.title': 'The luxury of <em>driving</em><br>where nature <em>sets the pace.</em>',
            'hero.cta1': 'DRIVE-IN',
            'hero.cta2': 'EXPERIENCE HERE',
            'thumb.0': 'Phanton GT — V12',
            'thumb.1': 'Barchetta Sport — Sunset',
            'thumb.2': 'Continental — Open Road',
            'thumb.3': 'Coupé Noir — Atelier',
            'feat1.kicker': '01 — Experience',
            'feat1.title': 'THE LUXURY OF <em>DRIVING</em> INTO THE WILD',
            'feat1.text': 'Private roads, unexplored landscapes and the muted roar of a motor at your command. Every route is hand-drawn by our concierge.',
            'feat1.cta1': 'FLEET AREA',
            'feat1.cta2': 'EXPERIENCE HERE',
            'feat2.tag': 'DRIVER-INSIDE',
            'feat2.title': 'FREEDOM <em>HAS NO LIMITS</em>',
            'feat2.text': 'From canyons to coastline — a curated set of routes that turn driving into narrative.',
            'feat2.cta': 'BOOK DRIVE',
            'feat3.title': 'IT BEGINS AS A DREAM, <em>DRIVING</em> IN THE WILD. REFINED THROUGH LUXURY, TODAY — LA STRADA.',
            'feat4.title': 'YOUR SANCTUARY OF <em>NATURE,</em> PRIVACY <em>AND</em> EXCLUSIVITY',
            'feat4.text': 'Whether it is a weekend stay at a vintage estate, our chalet in the Dolomites, or our private garage in Maranello — every chapter of La Strada is written with the same hand: discretion, attention, mastery.',
            'feat4.cta': 'EXPLORE ADDRESSES',
            'pkg.kicker': '02 — Packages',
            'pkg.eyebrow': 'EACH PACKAGE HAS BEEN DESIGNED TO COMBINE SEAMLESS PRIVATE DRIVING WITH THE ELEGANCE AND HOSPITALITY OF LA STRADA.',
            'pkg.col1': 'PILOT ONLY',
            'pkg.col2': 'MAXIMUM TWO',
            'pkg.col3': 'MAXIMUM THREE',
            'pkg.col4': 'MAXIMUM FOUR',
            'pkg.row1': 'VEHICLE HIRE',
            'pkg.row2': 'VEHICLE DISCOUNT',
            'pkg.row3': 'FUEL DISCOUNT',
            'pkg.row4': 'EXCLUSIVE VIP',
            'pkg.row5': 'LA STRADA LIFT',
            'pkg.yes': 'YES',
            'pkg.footnote': '*Packages are applicable to bookings of 2 nights and above. All discounts are calculated on the base fleet price. Each package includes one driver, private garage access, and a curated route. For bespoke itineraries, our concierge designs every chapter by hand.',
            'pkg.cta': 'EXPLORE DETAILS',
            'manif.eyebrow': 'SHARED DRIVING',
            'manif.text': 'NOT MILAN. NOT CÔTE D\'AZUR.<br>NOT SAINT-TROPEZ.<br><em>THIS IS FREEDOM.</em>',
            'beyond.title': 'BEYOND NICE, <em>BEYOND</em> CANNES, <em>BEYOND</em> SAINT-TROPEZ.',
            'beyond.text': 'You will find the Dolomites, the dunes of Erg Chebbi, the road of the giants, the open sky, the warm wind of the south. So that your journey makes sense of you — <em>not the other way around.</em>',
            'test.kicker': 'CLIENT TESTIMONIALS',
            'test.title': 'STORIES <em>FROM THE ROAD</em> TO LA STRADA — TOLD BY OUR GUESTS.',
            'foot.k1': 'Address',
            'foot.k2': 'Reservations',
            'foot.k3': 'Press',
            'foot.k4': 'Follow',
            'foot.addr': 'LA STRADA — Atelier & Garage<br>Estrada Particular, km 4<br>8125-012 Loulé, Algarve — Portugal',
            'foot.copy': '© 2026 LA STRADA. All rights reserved.',
            'foot.tag': 'PRIVATE AUTOMOTIVE EXPERIENCE',
            'menu.experience': 'EXPERIENCE',
            'menu.collection': 'FLEET',
            'menu.packages': 'PACKAGES',
            'menu.testimonials': 'TESTIMONIALS',
            'menu.contact': 'CONTACT',
            'menu.tagline': 'PRIVATE AUTOMOTIVE EXPERIENCE'
        },
        ES: {
            'nav.menu': 'MENÚ',
            'nav.contact': 'CONTACTO',
            'hero.title': 'El lujo de <em>conducir</em><br>donde la naturaleza <em>marca el ritmo.</em>',
            'hero.cta1': 'CONDUCIR',
            'hero.cta2': 'EXPERIMENTAR AQUÍ',
            'thumb.0': 'Phanton GT — V12',
            'thumb.1': 'Barchetta Sport — Atardecer',
            'thumb.2': 'Continental — Carretera Abierta',
            'thumb.3': 'Coupé Noir — Atelier',
            'feat1.kicker': '01 — Experiencia',
            'feat1.title': 'EL LUJO DE <em>CONDUCIR</em> HACIA LO SALVAJE',
            'feat1.text': 'Carreteras privadas, paisajes inexplorados y el ronco apagado de un motor a tu disposición. Cada ruta es dibujada a mano por nuestro conserje.',
            'feat1.cta1': 'VER FLOTA',
            'feat1.cta2': 'EXPERIMENTAR AQUÍ',
            'feat2.tag': 'CONDUCTOR A BORDO',
            'feat2.title': 'LA LIBERTAD <em>NO TIENE LÍMITES</em>',
            'feat2.text': 'De cañones a litoral — una selección de rutas que convierten la conducción en narrativa.',
            'feat2.cta': 'RESERVAR RUTA',
            'feat3.title': 'EMPIEZA COMO UN SUEÑO, <em>CONDUCIR</em> EN LO SALVAJE. REFINADO POR EL LUJO, HOY — LA STRADA.',
            'feat4.title': 'TU SANTUARIO DE <em>NATURALEZA,</em> PRIVACIDAD <em>Y</em> EXCLUSIVIDAD',
            'feat4.text': 'Ya sea una estancia de fin de semana en una finca vintage, nuestro chalet en los Dolomitas, o nuestro garaje privado en Maranello — cada capítulo de La Strada está escrito con la misma mano: discreción, atención, maestría.',
            'feat4.cta': 'EXPLORAR DIRECCIONES',
            'pkg.kicker': '02 — Paquetes',
            'pkg.eyebrow': 'CADA PAQUETE HA SIDO DISEÑADO PARA COMBINAR LA CONDUCCIÓN PRIVADA SIN FISURAS CON LA ELEGANCIA Y HOSPITALIDAD DE LA STRADA.',
            'pkg.col1': 'SOLO PILOTO',
            'pkg.col2': 'MÁXIMO DOS',
            'pkg.col3': 'MÁXIMO TRES',
            'pkg.col4': 'MÁXIMO CUATRO',
            'pkg.row1': 'ALQUILER DE VEHÍCULO',
            'pkg.row2': 'DESCUENTO VEHÍCULO',
            'pkg.row3': 'DESCUENTO COMBUSTIBLE',
            'pkg.row4': 'VIP EXCLUSIVO',
            'pkg.row5': 'LA STRADA LIFT',
            'pkg.yes': 'SÍ',
            'pkg.footnote': '*Los paquetes se aplican a reservas de 2 noches o más. Todos los descuentos se calculan sobre el precio base de la flota. Cada paquete incluye un conductor, acceso al garaje privado y una ruta curada. Para itinerarios a medida, nuestro conserje diseña cada capítulo a mano.',
            'pkg.cta': 'EXPLORAR DETALLES',
            'manif.eyebrow': 'CONDUCCIÓN COMPARTIDA',
            'manif.text': 'NI MILÁN. NI LA COSTA AZUL.<br>NI SAINT-TROPEZ.<br><em>ESTO ES LIBERTAD.</em>',
            'beyond.title': 'MÁS ALLÁ DE NIZA, <em>MÁS ALLÁ</em> DE CANNES, <em>MÁS ALLÁ</em> DE SAINT-TROPEZ.',
            'beyond.text': 'Encontrarás los Dolomitas, las dunas de Erg Chebbi, la carretera de los gigantes, el cielo abierto, el viento cálido del sur. Para que tu viaje tenga sentido de ti — <em>y no al revés.</em>',
            'test.kicker': 'TESTIMONIOS DE CLIENTES',
            'test.title': 'HISTORIAS <em>DESDE LA CARRETERA</em> HACIA LA STRADA — CONTADAS POR NUESTROS HUÉSPEDES.',
            'foot.k1': 'Dirección',
            'foot.k2': 'Reservas',
            'foot.k3': 'Prensa',
            'foot.k4': 'Síguenos',
            'foot.addr': 'LA STRADA — Atelier & Garaje<br>Estrada Particular, km 4<br>8125-012 Loulé, Algarve — Portugal',
            'foot.copy': '© 2026 LA STRADA. Todos los derechos reservados.',
            'foot.tag': 'EXPERIENCIA AUTOMOTRIZ PRIVADA',
            'menu.experience': 'EXPERIENCIA',
            'menu.collection': 'FLOTA',
            'menu.packages': 'PAQUETES',
            'menu.testimonials': 'TESTIMONIOS',
            'menu.contact': 'CONTACTO',
            'menu.tagline': 'EXPERIENCIA AUTOMOTRIZ PRIVADA'
        },
        PT: {
            'nav.menu': 'MENU',
            'nav.contact': 'CONTATO',
            'hero.title': 'O luxo de <em>dirigir</em><br>onde a natureza <em>manda o ritmo.</em>',
            'hero.cta1': 'DIRIGIR',
            'hero.cta2': 'EXPERIMENTE AQUI',
            'thumb.0': 'Phanton GT — V12',
            'thumb.1': 'Barchetta Sport — Pôr do Sol',
            'thumb.2': 'Continental — Estrada Aberta',
            'thumb.3': 'Coupé Noir — Atelier',
            'feat1.kicker': '01 — Experiência',
            'feat1.title': 'O LUXO DE <em>DIRIGIR</em> PARA O SELVAGEM',
            'feat1.text': 'Estradas privadas, paisagens inexploradas e o ronco surdo de um motor sob demanda. Cada trajeto é desenhado à mão pelo nosso concierge.',
            'feat1.cta1': 'VER FROTA',
            'feat1.cta2': 'EXPERIMENTE AQUI',
            'feat2.tag': 'MOTORISTA A BORDO',
            'feat2.title': 'A LIBERDADE <em>NÃO TEM LIMITES</em>',
            'feat2.text': 'De canyons a litoral — uma curadoria de rotas que transformam direção em narrativa.',
            'feat2.cta': 'RESERVAR ROTA',
            'feat3.title': 'COMEÇA COMO UM SONHO, <em>DIRIGIR</em> NO SELVAGEM. REFINADO PELO LUXO, HOJE — LA STRADA.',
            'feat4.title': 'O SEU SANTUÁRIO DE <em>NATUREZA,</em> PRIVACIDADE <em>E</em> EXCLUSIVIDADE',
            'feat4.text': 'Seja uma estadia de fim de semana numa propriedade vintage, o nosso chalet nos Dolomitas, ou a nossa garagem privada em Maranello — cada capítulo da La Strada é escrito com a mesma mão: discrição, atenção, mestria.',
            'feat4.cta': 'EXPLORAR ENDEREÇOS',
            'pkg.kicker': '02 — Pacotes',
            'pkg.eyebrow': 'CADA PACOTE FOI DESENHADO PARA COMBINAR DIREÇÃO PRIVADA SEM INTERRUPÇÕES COM A ELEGÂNCIA E HOSPITALIDADE DA LA STRADA.',
            'pkg.col1': 'SÓ PILOTO',
            'pkg.col2': 'MÁXIMO DOIS',
            'pkg.col3': 'MÁXIMO TRÊS',
            'pkg.col4': 'MÁXIMO QUATRO',
            'pkg.row1': 'ALUGUEL DE VEÍCULO',
            'pkg.row2': 'DESCONTO VEÍCULO',
            'pkg.row3': 'DESCONTO COMBUSTÍVEL',
            'pkg.row4': 'VIP EXCLUSIVO',
            'pkg.row5': 'LA STRADA LIFT',
            'pkg.yes': 'SIM',
            'pkg.footnote': '*Pacotes aplicáveis a reservas de 2 noites ou mais. Todos os descontos são calculados sobre o preço base da frota. Cada pacote inclui um motorista, acesso à garagem privada e uma rota curada. Para roteiros sob medida, o nosso concierge desenha cada capítulo à mão.',
            'pkg.cta': 'EXPLORAR DETALHES',
            'manif.eyebrow': 'DIREÇÃO COMPARTILHADA',
            'manif.text': 'NÃO É MILÃO. NÃO É A COSTA AZUL.<br>NÃO É SAINT-TROPEZ.<br><em>ISTO É LIBERDADE.</em>',
            'beyond.title': 'PARA ALÉM DE NICE, <em>PARA ALÉM</em> DE CANNES, <em>PARA ALÉM</em> DE SAINT-TROPEZ.',
            'beyond.text': 'Vais encontrar os Dolomitas, as dunas de Erg Chebbi, a estrada dos gigantes, o céu aberto, o vento quente do sul. Para que a tua jornada faça sentido de ti — <em>e não o contrário.</em>',
            'test.kicker': 'TESTEMUNHOS DE CLIENTES',
            'test.title': 'HISTÓRIAS <em>DA ESTRADA</em> ATÉ LA STRADA — CONTADAS PELOS NOSSOS CONVIDADOS.',
            'foot.k1': 'Endereço',
            'foot.k2': 'Reservas',
            'foot.k3': 'Imprensa',
            'foot.k4': 'Siga-nos',
            'foot.addr': 'LA STRADA — Atelier & Garagem<br>Estrada Particular, km 4<br>8125-012 Loulé, Algarve — Portugal',
            'foot.copy': '© 2026 LA STRADA. Todos os direitos reservados.',
            'foot.tag': 'EXPERIÊNCIA AUTOMOTIVA PRIVADA',
            'menu.experience': 'EXPERIÊNCIA',
            'menu.collection': 'FROTA',
            'menu.packages': 'PACOTES',
            'menu.testimonials': 'TESTEMUNHOS',
            'menu.contact': 'CONTATO',
            'menu.tagline': 'EXPERIÊNCIA AUTOMOTIVA PRIVADA'
        }
    };

    /* ---------- Testimonials (data + cycling) — names anonymized for portfolio use ---------- */
    const testimonials = [
        {
            quote: 'I was a driver and had the privilege of being one of the first to experience La Strada. To me, it is a place of extraordinary beauty, pure driving, ideal for those who deserve it. A garage with a unique character.',
            name: 'CLIENT 01',
            role: 'PRIVATE GUEST · ALGARVE'
        },
        {
            quote: 'La Strada redefined what I expected from an automotive concierge. Every detail — the route, the cabin scent, the playlist — felt considered, never staged. It is, simply, the most refined way to drive.',
            name: 'CLIENT 02',
            role: 'COLLECTOR · MARANELLO'
        },
        {
            quote: 'A weekend that begins with a hand-delivered key and ends with a quiet garage that already knows your name. La Strada is hospitality built by people who actually love cars.',
            name: 'CLIENT 03',
            role: 'PRIVATE GUEST · LISBON'
        }
    ];

    /* ---------- Language apply ---------- */
    let currentLang = 'EN';

    function applyLang(lang) {
        const dict = i18n[lang];
        if (!dict) return;
        currentLang = lang;

        // text-only nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] != null) el.textContent = dict[key];
        });

        // HTML-aware nodes (preserves <em>, <br>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] != null) el.innerHTML = dict[key];
        });

        // thumb captions
        document.querySelectorAll('[data-i18n-caption]').forEach(el => {
            const key = el.getAttribute('data-i18n-caption');
            if (dict[key] != null) el.setAttribute('data-caption', dict[key]);
        });

        // html lang attribute (accessibility)
        const htmlLang = { EN: 'en', ES: 'es', PT: 'pt-BR' }[lang] || 'en';
        document.documentElement.setAttribute('lang', htmlLang);

        // persist
        try { localStorage.setItem('lastrada-lang', lang); } catch (e) { /* ignore */ }
    }

    /* ---------- Nav scroll state ---------- */
    const nav = document.getElementById('topNav');
    const onScroll = () => {
        if (!nav) return;
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Testimonials cycling ---------- */
    const quoteText = document.getElementById('quoteText');
    const authorName = document.getElementById('authorName');
    const authorRole = document.getElementById('authorRole');
    const dots = document.querySelectorAll('.card-controls .dot');

    let currentIdx = 0;
    let cycleTimer = null;

    function setTestimonial(idx) {
        const t = testimonials[idx];
        if (!t) return;
        const card = document.querySelector('.card--front');
        if (card) {
            card.style.opacity = '0';
            setTimeout(() => {
                quoteText.textContent = t.quote;
                authorName.textContent = t.name;
                authorRole.textContent = t.role;
                card.style.opacity = '1';
            }, 250);
        }
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        currentIdx = idx;
    }

    dots.forEach(d => {
        d.addEventListener('click', () => {
            const idx = parseInt(d.dataset.index, 10) || 0;
            setTestimonial(idx);
            restartCycle();
        });
    });

    function restartCycle() {
        if (cycleTimer) clearInterval(cycleTimer);
        cycleTimer = setInterval(() => {
            const next = (currentIdx + 1) % testimonials.length;
            setTestimonial(next);
        }, 7000);
    }
    restartCycle();

    /* ---------- Smooth scroll for in-page anchors (offset for fixed nav) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id.length <= 1) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top, behavior: 'smooth' });
                closeMenu();
            }
        });
    });

    /* ---------- Reveal on scroll ---------- */
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.feature, .packages, .manifesto, .beyond, .testimonials, .contact')
            .forEach(el => {
                el.classList.add('reveal');
                observer.observe(el);
            });
    }

    /* ---------- Language switcher ---------- */
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const langOpts = langBtn.querySelectorAll('.lang-opt');
        langOpts.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = opt.getAttribute('data-lang');
                if (!lang) return;
                langOpts.forEach(o => o.classList.remove('lang-active'));
                opt.classList.add('lang-active');
                applyLang(lang);
            });
        });
    }

    /* ---------- Menu drawer ---------- */
    const navToggle = document.getElementById('navToggle');
    const menuDrawer = document.getElementById('menuDrawer');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');

    function openMenu() {
        if (!menuDrawer || !menuOverlay) return;
        menuDrawer.hidden = false;
        menuOverlay.hidden = false;
        // next frame so transition kicks in
        requestAnimationFrame(() => {
            menuDrawer.classList.add('open');
            menuOverlay.classList.add('open');
            menuDrawer.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        });
    }

    function closeMenu() {
        if (!menuDrawer || !menuOverlay) return;
        menuDrawer.classList.remove('open');
        menuOverlay.classList.remove('open');
        menuDrawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
            menuDrawer.hidden = true;
            menuOverlay.hidden = true;
        }, 500);
    }

    if (navToggle) navToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    /* ---------- Initial language: persisted > default PT ---------- */
    let initialLang = 'PT';
    try {
        const saved = localStorage.getItem('lastrada-lang');
        if (saved && i18n[saved]) initialLang = saved;
    } catch (e) { /* ignore */ }
    if (initialLang !== 'EN' && langBtn) {
        const targetOpt = langBtn.querySelector(`.lang-opt[data-lang="${initialLang}"]`);
        if (targetOpt) {
            langBtn.querySelectorAll('.lang-opt').forEach(o => o.classList.remove('lang-active'));
            targetOpt.classList.add('lang-active');
        }
    }
    applyLang(initialLang);
})();
