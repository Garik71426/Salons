const Messages = {
    header : {
        title : 'Ոճի Զգացմունք',
        dropDown : 'Գեղեցկության սրահներ',
        UserPage : 'Անձնական էջ',
        LogOut : 'Դուրս գալ',
        Cancel : 'Չեղարկել',
        Submit: 'Հաստատել',
        signIn : 'Մուտք',
        signUp : 'Գրանցվել',
        inputs: {
            name: { label: 'Անուն', validationErrors: 'Անունը պետք է պարունակի միայն տառեր և 1-ից 10 սիմվոլից բաղկացած լինի' },
            surname: { label: 'Ազգանուն', validationErrors: 'Ազգանոընը պետք է պարունակի միայն տառեր և 1-ից 15 սիմվոլից բաղկացած լինի' },
            email: { type: 'email', label: 'Էլ. փոստ', validationErrors: 'Սխալ էլ․փոստ', placeholder: 'exampleEmail@bk.ru' },
            phone: { label: 'Հերախոս', validationErrors: 'Հեռախոսահամարը պետք է պարունակի միայն թվեր և 12 սիմվոլից բաղկացած լինի', placeholder: '+374XXYYYYYY' },
            b_day: { type: 'date', label: 'Ծննդյան տարեթիվ', validationErrors: 'Անունը պետք է պարունակի միայն տառեր և 1-ից 10 սիմվոլից բաղկացած լինի' },
            password: { type: 'password', label: 'Գաղտնաբառ', validationErrors: 'Գաղտնաբառը պետք է 8 սիմվոլից քիչ չլինի', placeholder: '********' },
            repeatPassword: { type: 'password', label: 'Կրկնել գաղտնաբառը', validationErrors: 'Գաղտնաբառը պետք է 8 սիմվոլից քիչ չլինի', placeholder: '********' }
        }
    },
    // validationErrors: {
    //             nameError: "Անունը պետք է պարունակի միայն տառեր և 1-ից 10 սիմվոլից բաղկացած լինի",
    //             surnameError: "Ազգանոընը պետք է պարունակի միայն տառեր և 1-ից 15 սիմվոլից բաղկացած լինի",
    //             emailError: "Սխալ էլ․փոստ",
    //             emailError2: "Այդ էլ․փոստը արդեն գրանցված է ",
    //             phoneError: "Հեռախոսահամարը պետք է պարունակի միայն թվեր և 5-ից 12 սիմվոլից բաղկացած լինի",
    //             phoneError2: "Այդ հեռախոսահամարը արդեն գրանցված է ",
    //             passwordError: "Գաղտնաբառը պետք է 8 սիմվոլից քիչ չլինի",
    //             passwordError2: "Այդ գաղտնաբառը արդեն գրանցված է ",
    //             repeatPasswordError: "Գաղտնաբառերը չեն համընկնում",
    //             ageError: "Տարիքը պետք է պարունակի միայն թվեր և 2 սիմվոլից ավել չլինի",
    //             salonNameError: "Գեղեցկության սրահի անունը պետք է պարունակի 1-ից 30 սիմվոլ",
    //             addressError: "Հասցեն պետք է պարունակի 1-ից 30 սիմվոլ",
    //             infoError: "Տեքստը չի կարող 700 սիմվոլից ավել լինել",
    //             mailError: "Հասցեն սխալ է նշված",
    //             categoryError: "Կատեգորիայի անունը  պետք է պարունակի 1-ից 30 սիմվոլ"
    //         },

    settings : {
        settingsName : 'Փոխել տվյալները',
        name : 'Անուն',
        adress : 'Հասցե',
        phone : 'Հեռախոսահամար',
        ourSet : 'Մեր մասին',
        insertImg : 'Տեղադրել նկար',
        saveChange : 'Հաստատել',
        category : 'Կատեգորիա '
    },
    footer : {
        footerEmail : 'Mail: butySaolns@mail.ru',
        footerPhone1 : 'TelePhone: +37498722717',
        footerPhone2 : 'TelePhone: +37496550272',
        footerPhone3 : 'TelePhone: +37493399432',
        footerDate : '©Copyright BEAUTY SALON ',
        footerLi1 : 'Barber - Shaves & Trims.com',
        footerLi2 : 'Blind Barber - Stay Handsome.com',
        footerLi3 : 'barberha.com'
    },
    table : {
        userAddress : 'Հասցե',
        beautySalonName : 'Գեղեցկության սրահ',
        buttonText : 'Մանրամասն',
        searchFor : 'Որոնել ըստ',
        forName : 'Անվան',
        forSurname : 'Ազգանվան',
        forAddress : 'Հասցեի',
        forSalon : 'Սրահի',
        specialiistButtonText : 'Դիտել մասնագետին'
    },
    beautySalons : {
        beautySalonsAbout : 'Մեր մասին',
        beautySalonsAddress : 'Հասցե',
        beautySalonsPhone : 'Հեռախոսահամար'
    },
    specialist : {
        information : 'Տեղեկատվություն',
        salonPhone: 'Սրահի Հեռ․ -',
        salonName : ' Սրահի անուն - ',
        salonAddress : ' Սրահի հասցե - ',
        socialMedia : ' Կապ սոց․ կայքերում - ',
        // registered : 'Հերթագրվել',
        // chooseWork : 'Ընտրել աշխատանքը',
        // chooseClock : 'Ընտրել ժամ',
        // confirmed : 'Հաստատել',
        myWorkes : 'Իմ աշխատանքներ',
        age : 'Տարիք -',
        prof : 'Մասնագիտություն -',
    },

    AddWorker : {
        AddWorker : 'Ավելացնել աշխատակից',
        image : 'Նկար',
        name : 'Անուն',
        surname : 'Ազգանուն',
        age : 'Տարիք',
        information : 'Տեղեկատվություն',
        connectionWithSocialMedia : 'Կապ սոց․ կայքեր',
        AddWorkExample : 'Ավելացնել աշխատանքի օրինակ',
        save : 'Պահպանել',
        confirmChanges : 'Հաստատել ',
        modifyData : 'Փոփոխել տվյալները'
    },
    AddCategory : {
        addCat : 'Ավալացնել կատեգորիա',
        nameCategory : 'Նշել կատեգորիայի անուն',
        confirmChanges : 'Հաստատել '
    },
    Account : {
        name : "Անուն:",
        surname : "Ազգանուն:",
        phone : "Հեռախոսահամար:",
        age: 'Տարիք -',
        Submit: 'Հաստատել',
     }
};
export default Messages;
