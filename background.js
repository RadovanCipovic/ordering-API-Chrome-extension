chrome.runtime.onInstalled.addListener(() => {
    //--------------------------- SAJTOVI --------------------
    const sites = [
        {
            id: "site1",
            title: "Pretrazi na EWE",
            url: "https://ewe4.me/pretraga/?q=",
        },
        {
            id: "site2",
            title: "Pretrazi na COM-TRADE",
            url: "https://www.ct4partners.me/product-list/search/",
        },
        {
            id: "site3",
            title: "Pretrazi na Kimtec",
            url: "https://webshop.kimtec-cg.com/me/search/?text=",
        },
        {
            id: "site4",
            title: "Pretrazi na MainFrame",
            url: "https://www.mainframe.co.me/?lang=mne&mod=store&c=s_category&action=search&cid=0&q=",
        },
        {
            id: "site5",
            title: "Pretrazi na Venkon",
            url: "https://mi-montenegro.me/c/pretraga?search=",
        },
        {
            id: "site6",
            title: "Gmail pretraga",
            url: "https://mail.google.com/mail/u/0/#search/",
        },
    ];

    // ----------------------- GRUPA SAJTOVI -------------------
    chrome.contextMenus.create({
        id: "groupTitle",
        title: "SAJTOVI 🌐",
        contexts: ["selection"],
        enabled: false, // sluzi samo kao naslov
    });

    sites.forEach((site) => {
        chrome.contextMenus.create({
            id: site.id,
            title: site.title,
            contexts: ["selection"],
        });
    });

    // Separator
    chrome.contextMenus.create({
        id: "separator1",
        type: "separator",
        contexts: ["selection"],
    });

    // -------------------- GRUPA EMAIL -------------------
    chrome.contextMenus.create({
        id: "emailGroupTitle",
        title: "EMAIL 📧",
        contexts: ["selection"],
        enabled: false,
    });

    // -------------------- EMAIL - ZA KIPS --------------------
    chrome.contextMenus.create({
        id: "emailKIPS",
        title: "KIPS",
        contexts: ["selection"],
    });

    // -------------------- EMAIL - ZA BEKO --------------------
    chrome.contextMenus.create({
        id: "emailBEKO",
        title: "BEKO",
        contexts: ["selection"],
    });

    // --------------------- EMAIL - ZA METALAC ----------------
    chrome.contextMenus.create({
        id: "emailMETALAC",
        title: "METALAC",
        contexts: ["selection"],
    });

    //----------------------- Separator ------------------------
    chrome.contextMenus.create({
        id: "separator2",
        type: "separator",
        contexts: ["selection"],
    });

    // ---------------------- GRUPA PREDRACUNI -----------------
    chrome.contextMenus.create({
        id: "emailPredracun",
        title: "PREDRACUN 📧",
        contexts: ["selection"],
        enabled: false,
    });

    // ---------------------- PREDRACUN RS ---------------------
    chrome.contextMenus.create({
        id: "predracunSR",
        title: "Predracun SR",
        contexts: ["selection"],
    });

    // ---------------------- PREDRACUN EN ---------------------
    chrome.contextMenus.create({
        id: "predracunEN",
        title: "Predracun EN",
        contexts: ["selection"],
    });

    // Separator
    chrome.contextMenus.create({
        id: "separator3",
        type: "separator",
        contexts: ["selection"],
    });

    // ---------- EMAIL ZA (BROJ NIJE U FUNKCIJI) RS ---------------
    chrome.contextMenus.create({
        id: "numberMissing",
        title: "Broj nije u funkciji/nepostojeci",
        contexts: ["selection"],
    });

    // ---------- EMAIL ZA (BROJ NIJE U FUNKCIJI) EN ---------------
    chrome.contextMenus.create({
        id: "numberMissingEN",
        title: "Broj nije u funkciji/nepostojeci EN",
        contexts: ["selection"],
    });

    // TEST dodatna opcija - u izradi
    chrome.contextMenus.create({
        id: "mainMenu",
        title: "Opcije TEST",
        contexts: ["selection"],
    });

    // podmeni test
    chrome.contextMenus.create({
        id: "subMenu 1",
        title: "PodOpcija TEST",
        parentId: "mainMenu",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    const sites = {
        site1: "https://ewe4.me/pretraga/?q=",
        site2: "https://www.ct4partners.me/product-list/search/",
        site3: "https://webshop.kimtec-cg.com/me/search/?text=",
        site4: "https://www.mainframe.co.me/?lang=mne&mod=store&c=s_category&action=search&cid=0&q=",
        site5: "https://mi-montenegro.me/c/pretraga?search=",
        site6: "https://mail.google.com/mail/u/0/#search/",
    };

    const url = sites[info.menuItemId];
    if (url) {
        const selectedText = info.selectionText;
        if (selectedText) {
            chrome.tabs.create({ url: url + encodeURIComponent(selectedText) });
        } else {
            alert("Niste odabrali tekst za pretragu.");
        }
    }

    // --------------------- email kips ---------------------------
    if (info.menuItemId === "emailKIPS") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Poštovani,\n\nDa li imate na stanju: ${selectedText}?\n\nSrdačan pozdrav,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Upit");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ljubica.cijanovic@kips.me&su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    // -------------------- email beko ---------------------------
    if (info.menuItemId === "emailBEKO") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Poštovani,\n\nDa li imate na stanju: ${selectedText}?\n\nSrdačan pozdrav,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Upit");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tatjana.bozovic@eurotehnikamn.me&su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    //-------------------- email metalac ------------------------
    if (info.menuItemId === "emailMETALAC") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Poštovani,\n\nDa li imate na stanju: ${selectedText}?\n\nSrdačan pozdrav,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Upit");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jovan.vukadinovic@metalacmarket.me,goran.kovacevic@metalacmarket.me &su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    // ----------------- predracun rs --------------------------
    if (info.menuItemId === "predracunSR") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Poštovani,\n\nU prilogu Vam saljemo predracun \n\nSrdačan pozdrav,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Predracun");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedText} &su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    // ------------------ predracun en ------------------------
    if (info.menuItemId === "predracunEN") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Dear,\n\nHere is your Invoice \n\nBest regards,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Invoice");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedText} &su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    // ------------------ email (br van funkcije RS) --------------
    if (info.menuItemId === "numberMissing") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Postovani,\n\nBroj koji ste unijeli u vasu porudzbinu je van funkcije ili nije ispravno unesen broj.\nMolimo vas da nam posaljete broj telefona kako bi mogli procesuirati porudzbinu.\n\nSrdacan pozdrav,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Broj nije u funkciji");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedText} &su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }

    // ----------------- email (br van funkcije EN)
    if (info.menuItemId === "numberMissingEN") {
        const selectedText = info.selectionText;
        const emailBody = encodeURIComponent(
            `Dear Sir/Madam,\n\nThe number you entered in your order is either out of service or incorrectly entered.\nPlease send us a valid phone number that is from Montenegro, so that we can process your order.\n\nBest regards,\nRadovan Cipovic \n\nwww.datika.me\n"DATIKA" DOO\nul. 8. marta br. 55 - PLC Morača (Titex), 81000 Podgorica\ntel.: +382 20220673, +382 67310906, +382 67310914`
        );
        const emailSubject = encodeURIComponent("Number missing");
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedText} &su=${emailSubject}&body=${emailBody}`;
        chrome.tabs.create({ url: mailtoUrl });
    }
});
