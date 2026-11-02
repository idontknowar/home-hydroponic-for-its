console.log("External script loaded successfully.");
// ===== 多語言數據 =====
    const i18nData = {
        zhHant: {
            title: "居家水培植物指南",
            "header-title": "居家水培植物指南",
            "nav-about": "關於水培",
            "nav-howto": "如何製作",
            "nav-faq": "常見問題",
            "nav-contact": "聯絡我們",
            "nav-lang": "🌏 語言",
            "nav-drop-intro": "介紹",
            "nav-drop-benefit": "水培好處",
            "nav-drop-gallery": "適合居家水培的植物",
            "nav-drop-compare": "水培與泥土栽培的分別",
            "nav-drop-material": "居家水培所需的材料",
            "nav-drop-step": "水培做法",
            "nav-drop-note": "注意事項",
            "intro-more": "瞭解更多",
            "contact-title": "聯絡我們",
            "contact-sub": "加入 WhatsApp 群組，與其他種植新手交流心得",
            "contact-wa": "WhatsApp 加群",
            "contact-hint": "用手機掃描二維碼，或點擊按鈕加入群組",
            "gallery-title": "適合居家水培的植物",
            "pic1": "超人氣水培觀葉綠植",
            "pic2": "可食用水培香草",
            "pic3": "水培香菜示範",
            "intro-title": "居家水培介紹",
            "intro-text": "水培，也稱水耕栽培，是一種不使用泥土，利用清水搭配營養液直接讓植物根系在水中生長的種植方式。適合在室內、廚房、窗台等空間擺放，打造簡單乾淨的居家綠意。",
            "benefit-title": "水培的好處",
            "b1": "乾淨無泥土，不容易弄髒室內環境",
            "b2": "較少土壤蟲害，例如小黑飛、螞蟻等",
            "b3": "根系狀態一目了然，方便觀察健康狀況",
            "b4": "體積輕巧，適合小公寓、窗台、辦公室",
            "b5": "部分香草可以隨摘隨用，實用又美觀",
            "saving water": "少用水",
            "saving water explain": "水培不需要用太多的水，亦不會有怕澆太多水的困擾。",
            "growth rate": "生長速度快",
            "growth rate explain": "水培植物因營養液的幫助，它的生長速度普遍比泥土種的快。",
            "pesticide free": "沒農藥",
            "pesticide free explain": "水培只用到營養液和水，基本上是沒有使用農藥。",
            "compare-title": "水培與泥土栽培的分別",
            "col-item": "項目",
            "col-hydro": "水培",
            "col-soil": "泥土栽培",
            "row1": "種植介質",
            "row1-h": "水 / 營養液",
            "row1-s": "培養土、介質土",
            "row2": "清潔度",
            "row2-h": "乾淨，不會揚土",
            "row2-s": "容易沾到泥土",
            "row3": "蟲害機率",
            "row3-h": "偏低",
            "row3-s": "較高，容易有土生蟲",
            "row4": "養分管理",
            "row4-h": "需要定期補充水培營養液",
            "row4-s": "土壤本身有養分，定期施肥",
            "row5": "維護重點",
            "row5-h": "定期換水、預防爛根",
            "row5-s": "控制澆水，避免積水爛根",
            "material-title": "居家水培所需的材料",
            "m1": "透明玻璃瓶 / 容器（水杯、水培瓶均可）",
            "m2": "要水培的植物枝條或小苗",
            "m3": "乾淨的水（靜置過的自來水最佳）",
            "m4": "水培專用營養液（非必需，後期生長使用）",
            "m5": "剪刀、清水，用來修剪枝條",
            "step-title": "水培做法",
            "s1": "挑選健康的植物枝條，切口斜剪，去除下方多餘葉片",
            "s2": "自來水先靜置一晚散走氯氣",
            "s3": "放入容器，水位不要淹過全部葉片，只浸到切口位置",
            "s4": "放在明亮散射光位置，避開陽光直曬",
            "s5": "等待長出新根，生根後可以少量加入營養液",
            "note-title": "注意事項",
            "n1": "定期換水，一般夏天2～3天一次、冬天7天左右一次",
            "n2": "若發現根部發黑、有臭味，代表爛根，要立刻剪掉爛根並換水",
            "n3": "不要放在太陽直曬處，容易長藻類讓水變綠",
            "n4": "營養液不要加太多，濃度太高會燒根",
            "n5": "葉片不要長期泡在水裡，容易腐爛發臭",
            "faq-title": "常見問題 FAQ",
            "q1": "Q：水培一定要加營養液嗎？",
            "a1": "剛開始生根階段不需要營養液；等到根系長得茂密之後，再少量添加就可以。只清水也可以存活一段時間，但長期會缺養分。",
            "q2": "Q：水變綠、長青苔怎麼辦？",
            "a2": "主要原因是陽光直射。移到散射光位置，把容器洗乾淨、全部換新水即可。",
            "q3": "Q：為什麼根部會發臭、發黑？",
            "a3": "多數是缺氧爛根。把腐爛的根全部剪乾淨，容器清洗消毒，換上新水，並減少水位。"
        },
        zhHans: {
            title: "居家水培植物指南",
            "header-title": "居家水培植物指南",
            "nav-about": "关于水培",
            "nav-howto": "如何制作",
            "nav-faq": "常见问题",
            "nav-contact": "联系我们",
            "nav-lang": "🌏 语言",
            "nav-drop-intro": "介绍",
            "nav-drop-benefit": "水培好处",
            "nav-drop-gallery": "适合居家水培的植物",
            "nav-drop-compare": "水培与泥土栽培的区别",
            "nav-drop-material": "居家水培所需的材料",
            "nav-drop-step": "水培做法",
            "nav-drop-note": "注意事项",
            "intro-more": "了解更多",
            "contact-title": "联系我们",
            "contact-sub": "加入 WhatsApp 群组，与其他种植新手交流心得",
            "contact-wa": "WhatsApp 加群",
            "contact-hint": "用手机扫描二维码，或点击按钮加入群组",
            "gallery-title": "适合居家水培的植物",
            "pic1": "高人气水培观叶绿植",
            "pic2": "可食用水培香草",
            "pic3": "水培香菜示范",
            "intro-title": "居家水培介绍",
            "intro-text": "水培，也叫水耕栽培，是一种不使用泥土，利用清水搭配营养液直接让植物根系在水中生长的种植方式。适合在室内、厨房、窗台等空间摆放，打造干净清爽的居家绿意。",
            "benefit-title": "水培的好处",
            "b1": "干净无泥土，不容易弄脏室内环境",
            "b2": "土壤虫害更少，比如小黑飞、蚂蚁等",
            "b3": "根系状态一目了然，方便观察健康情况",
            "b4": "轻巧省空间，适合小户型、窗台、办公室",
            "b5": "部分香草可以随摘随用，实用又好看",
            "saving water": "少用水",
            "saving water explain": "水培不需要用太多的水，亦不会有怕浇太多水的困扰。",
            "growth rate": "生长速度快",
            "growth rate explain": "水培植物因营养液的帮助，它的生长速度普遍比泥土种的快。",
            "pesticide free": "没农药",
            "pesticide free explain": "水培只用到营养液和水，基本上是没有使用农药。",
            "compare-title": "水培与泥土栽培的区别",
            "col-item": "项目",
            "col-hydro": "水培",
            "col-soil": "泥土栽培",
            "row1": "种植介质",
            "row1-h": "水 / 营养液",
            "row1-s": "营养土、栽培基质",
            "row2": "清洁度",
            "row2-h": "干净，不会扬尘",
            "row2-s": "容易沾泥土",
            "row3": "虫害概率",
            "row3-h": "较低",
            "row3-s": "偏高，容易滋生土虫",
            "row4": "养分管理",
            "row4-h": "需要定期补充水培营养液",
            "row4-s": "土壤自带养分，定期施肥",
            "row5": "维护重点",
            "row5-h": "定期换水，预防烂根",
            "row5-s": "控制浇水，防止积水烂根",
            "material-title": "居家水培需要的材料",
            "m1": "透明玻璃瓶/容器（水杯、水培瓶都可以）",
            "m2": "准备水培的枝条或者小苗",
            "m3": "干净水源（静置后的自来水最好）",
            "m4": "水培专用营养液（非必需，后期生长用）",
            "m5": "剪刀，用来修剪枝条",
            "step-title": "水培步骤",
            "s1": "挑选健康枝条，斜剪切口，去掉下方多余叶片",
            "s2": "自来水提前静置一晚，散去氯气",
            "s3": "放入容器，水位不要浸泡叶片，只没过切口",
            "s4": "放在明亮散射光处，避开阳光直晒",
            "s5": "等待生根，长出新根之后可以少量添加营养液",
            "note-title": "注意事项",
            "n1": "定期换水，夏天约2～3天一次，冬天大约7天一次",
            "n2": "根部发黑、有异味就是烂根，及时剪掉烂根并换水",
            "n3": "避免阳光直晒，容易长绿藻让水质变浑",
            "n4": "营养液宁少勿多，浓度过高会烧根",
            "n5": "叶片不要长期泡在水中，容易腐烂发臭",
            "faq-title": "常见问题 FAQ",
            "q1": "Q：水培一定要加营养液吗？",
            "a1": "生根初期不需要营养液；根系茂密后再少量添加。只用清水植物也可以存活一段时间，但长期会缺少养分。",
            "q2": "Q：水变绿、长青苔怎么办？",
            "a2": "大多是阳光直射造成。移到散射光位置，清洗容器、全部换新水即可。",
            "q3": "Q：为什么根部发臭发黑？",
            "a3": "大多是缺氧烂根。把腐烂根系修剪干净，清洗容器，换新水，降低水位。"
        },
        en: {
            title: "Home Hydroponics Guide",
            "header-title": "Home Hydroponics Guide",
            "nav-about": "About Hydroponics",
            "nav-howto": "How‑to Guide",
            "nav-faq": "FAQ",
            "nav-contact": "Contact Us",
            "nav-lang": "🌏 Language",
            "nav-drop-intro": "Introduction",
            "nav-drop-benefit": "Benefits",
            "nav-drop-gallery": "Suitable Plants",
            "nav-drop-compare": "Hydroponics vs Soil",
            "nav-drop-material": "Materials Needed",
            "nav-drop-step": "Step‑by‑Step",
            "nav-drop-note": "Important Notes",
            "intro-more": "Learn More",
            "contact-title": "Contact Us",
            "contact-sub": "Join our WhatsApp group to share tips with other beginners",
            "contact-wa": "Join WhatsApp Group",
            "contact-hint": "Scan the QR code or click the button to join",
            "gallery-title": "Plants suitable for home hydroponics",
            "pic1": "Popular foliage plants for water culture",
            "pic2": "Edible herbs for hydroponics",
            "pic3": "Hydroponic coriander demo",
            "intro-title": "About Home Hydroponics",
            "intro-text": "Hydroponics is a soilless growing method. Plants grow their roots in water or nutrient solution. It is perfect for indoors, kitchens and windowsills to create clean green space.",
            "benefit-title": "Benefits of Hydroponics",
            "b1": "No soil, keeps your room clean",
            "b2": "Fewer soil pests such as fungus gnats",
            "b3": "Roots are visible, easy to check plant health",
            "b4": "Light and compact, ideal for small homes & offices",
            "b5": "Some herbs can be harvested fresh anytime",
            "saving water": "Water-efficient",
            "saving water explain": "Hydroponics requires very little water, and there is no risk of overwatering.",
            "growth rate": "Rapid growth",
            "growth rate explain": "Thanks to nutrient solutions, hydroponic plants generally grow faster than those grown in soil.",
            "pesticide free": "Pesticide-free",
            "pesticide free explain": "Hydroponics relies solely on nutrient solutions and water, meaning no pesticides are used.",
            "compare-title": "Hydroponics vs Soil Cultivation",
            "col-item": "Item",
            "col-hydro": "Hydroponics",
            "col-soil": "Soil planting",
            "row1": "Growing medium",
            "row1-h": "Water / nutrient solution",
            "row1-s": "Potting mix",
            "row2": "Cleanliness",
            "row2-h": "Clean, no dust",
            "row2-s": "Messy soil",
            "row3": "Pest risk",
            "row3-h": "Low",
            "row3-s": "Higher, soil pests common",
            "row4": "Nutrient care",
            "row4-h": "Add hydroponic nutrients regularly",
            "row4-s": "Soil contains nutrients, fertilize occasionally",
            "row5": "Main focus",
            "row5-h": "Change water regularly, prevent root rot",
            "row5-s": "Control watering to avoid root rot",
            "material-title": "What you need",
            "m1": "Clear glass jar / container",
            "m2": "Plant cuttings or seedlings",
            "m3": "Clean water (tap water rested overnight)",
            "m4": "Hydroponic nutrient liquid (optional for later growth)",
            "m5": "Scissors for cutting stems",
            "step-title": "How to grow hydroponically",
            "s1": "Pick healthy stems, cut diagonally, remove lower leaves",
            "s2": "Leave tap water overnight to remove chlorine",
            "s3": "Put cutting in jar, only submerge the cut end, not leaves",
            "s4": "Place in bright indirect light, avoid direct sun",
            "s5": "Wait for new roots. Add small amount of nutrient after rooting",
            "note-title": "Important Notes",
            "n1": "Change water regularly: every 2–3 days in summer, weekly in winter",
            "n2": "Black smelly roots mean root rot. Cut rotten roots and replace water",
            "n3": "Keep away from direct sunlight to avoid algae",
            "n4": "Do not overuse nutrient solution, strong concentration burns roots",
            "n5": "Do not submerge leaves in water, they will rot",
            "faq-title": "FAQ",
            "q1": "Q: Do I have to use nutrient solution?",
            "a1": "No need during rooting stage. Add nutrients only after roots grow well. Plants can survive in plain water for a while but lack nutrients long‑term.",
            "q2": "Q: Why is the water turning green with algae?",
            "a2": "Direct sunlight causes algae. Move to indirect light, clean the jar and refill water.",
            "q3": "Q: Why roots turn black and smell bad?",
            "a3": "Root rot caused by lack of oxygen. Trim rotten roots, clean container, refill water and lower water level."
        }
    };

    // ===== 語言切換 =====
    function changeLang(lang) {
        document.documentElement.lang = lang === "zhHant" ? "zh-Hant" : lang === "zhHans" ? "zh-CN" : "en";
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute("data-i18n");
            if (i18nData[lang] && i18nData[lang][k] !== undefined) {
                el.innerText = i18nData[lang][k];
            }
        });
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.getElementById("langWrap").classList.remove("open");
        document.getElementById("mobilePanel").classList.remove("open");
        document.getElementById("hamburgerBtn").classList.remove("active");
    }

    // ===== 桌面下拉菜单 =====
    document.querySelectorAll('[data-dropdown]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const li = btn.closest('li');
            const wasOpen = li.classList.contains('open');
            // 关闭所有其他下拉
            document.querySelectorAll('.nav-links > li').forEach(item => item.classList.remove('open'));
            if (!wasOpen) li.classList.add('open');
        });
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links')) {
            document.querySelectorAll('.nav-links > li').forEach(item => item.classList.remove('open'));
        }
    });

    // ===== 语言下拉 =====
    const langWrap = document.getElementById('langWrap');
    const langTrigger = document.getElementById('langTrigger');
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        langWrap.classList.toggle("open");
    });
    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            changeLang(btn.dataset.lang);
        });
    });
    document.addEventListener('click', (e) => {
        if (!langWrap.contains(e.target)) langWrap.classList.remove("open");
    });

    // ===== 移動端菜單 =====
    const hamburger = document.getElementById('hamburgerBtn');
    const mobilePanel = document.getElementById('mobilePanel');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobilePanel.classList.toggle('open');
    });
    mobilePanel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobilePanel.classList.remove('open');
        });
    });
    // 移动端語言按鈕
    document.querySelectorAll('.mobile-lang-group .lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLang(btn.dataset.lang);
        });
    });

    // ===== FAQ =====
    document.querySelectorAll('.faq-question').forEach(q => {
        q.onclick = () => {
            q.nextElementSibling.classList.toggle('open');
        };
    });

    // ===== 燈箱 =====
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.lightbox-img').forEach(img => {
        img.onclick = () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
        };
    });
    closeBtn.onclick = () => lightbox.classList.remove('show');
    lightbox.onclick = (e) => {
        if (e.target === lightbox) lightbox.classList.remove('show');
    };

    // ===== header 滚動陰影 =====
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 4);
    });

    // ===== 初始化語言 =====
    changeLang('zhHant');