export const patientModule = {
    state: () => ({
        patients: [
            {
                id: 1,
                name: "Елена",
                secondName: "Абоимова",
                patronymic: "Валентиновна",
                dateOfBirth: "15.06.2017",
                snils: "29200035931",
                address: "Россия, г. Москва, Социалистическая ул., д. 5 кв.181",
                registrationAddress:
                    "Россия, г. Дзержинск, Весенняя ул., д. 11 кв.127",
                oms: "1133320394417960",
            },
            {
                id: 2,
                name: "Ника",
                secondName: "Мацовкина",
                patronymic: "Семеновна",
                dateOfBirth: "12.03.1987",
                snils: "30314318812",
                addres: "Россия, г. Улан-Удэ, 3 Марта ул., д. 16 кв.140",
                registrationAddress:
                    "Россия, г. Серпухов, Луговой пер., д. 22 кв.207",
                oms: "1620231541715318",
            },
            {
                id: 3,
                name: "Екатерина",
                secondName: "Ворожцова",
                patronymic: "Александровна",
                dateOfBirth: "12.09.1993",
                snils: "24287045876",
                addres: "Россия, г. Ярославль, Октябрьская ул., д. 11 кв.16",
                registrationAddress:
                    "Россия, г. Сыктывкар, Мичурина ул., д. 8 кв.165",
                oms: "4783621629602411",
            },
            {
                id: 4,
                name: "Андрей",
                secondName: "Ядренников",
                patronymic: "Серафимович",
                dateOfBirth: "17.05.1976",
                snils: "73881979675",
                addres: "Россия, г. Томск, Сосновая ул., д. 24 кв.216",
                registrationAddress:
                    "Россия, г. Томск, Сосновая ул., д. 24 кв.216",
                oms: "1851693603413867",
            },
            {
                id: 5,
                name: "Евгений",
                secondName: "Аглеев",
                patronymic: "Григорьевич",
                dateOfBirth: "15.06.2017",
                snils: "29200035931",
                addres: "Россия, г. Москва, Социалистическая ул., д. 5 кв.181",
                registrationAddress:
                    "Россия, г. Дзержинск, Весенняя ул., д. 11 кв.127",
                oms: "1133320394417960",
            },
        ],
        dialogVisible: false,
        isPatientLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPage: 0,
        sortOptions: [
            { value: "name", name: "По имени" },
            { value: "dateOfBirth", name: "По дате рождения" },
        ],
    }),
    getters: {
        sortedPatients(state) {
            return [...state.patients].sort((patient1, patient2) =>
                patient1[state.selectedSort]?.localeCompare(
                    patient2[state.selectedSort]
                )
            );
        },
        sortedAndSearchedPatients(state, getters) {
            return getters.sortedPatients.filter((patient1) =>
                patient1.secondName
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setPatients(state, patients) {
            state.patients = patients;
        },
        setLoading(state, bool) {
            state.isPatientLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPage) {
            state.totalPage = totalPage;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
};
