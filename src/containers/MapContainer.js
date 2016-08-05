import React from 'react';
import MapComponent from './../components/MapComponent';
import AreaSelector from './../components/AreaSelector';

export default class MapContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedAreas: [],
            currentMap: 'world',
            areas: [
                {code: "BD", fullName: 'Бангладеш', relating: ['world', 'asia']},
                {code: "BE", fullName: 'Бельгия', relating: ['world', 'europe']},
                {code: "BF", fullName: 'Буркина-Фасо', relating: ['world', 'africa']},
                {code: "BG", fullName: 'Болгария', relating: ['world', 'europe']},
                {code: "BA", fullName: 'Босния и Герцеговина', relating: ['world', 'europe']},
                {code: "BN", fullName: 'Бруней-Даруссалам', relating: ['world', 'asia']},
                {code: "BO", fullName: 'Боливия', relating: ['world', 's-america']},
                {code: "JP", fullName: 'Япония', relating: ['world', 'asia']},
                {code: "BI", fullName: 'Бурунди', relating: ['world', 'africa']},
                {code: "BJ", fullName: 'Бенин', relating: ['world', 'africa']},
                {code: "BT", fullName: 'Бутан', relating: ['world', 'asia']},
                {code: "JM", fullName: 'Ямайка', relating: ['world']},
                {code: "BW", fullName: 'Ботсвана', relating: ['world', 'africa']},
                {code: "BR", fullName: 'Бразилия', relating: ['world']},
                {code: "BS", fullName: 'Багамы', relating: ['world']},
                {code: "BY", fullName: 'Беларусь', relating: ['world', 'europe']},
                {code: "BZ", fullName: 'Белиз', relating: ['world']},
                {code: "RU", fullName: 'Россия', relating: ['world', 'europe']},
                {code: "RW", fullName: 'Руанда', relating: ['world', 'africa']},
                {code: "RS", fullName: 'Сербия', relating: ['world', 'europe']},
                {code: "LT", fullName: 'Литва', relating: ['world', 'europe']},
                {code: "LU", fullName: 'Люксембург', relating: ['world', 'europe']},
                {code: "LR", fullName: 'Либерия', relating: ['world', 'africa']},
                {code: "RO", fullName: 'Румыния', relating: ['world', 'europe']},
                {code: "GW", fullName: 'Гвинея-Бисау', relating: ['world', 'africa']},
                {code: "GT", fullName: 'Гватемала', relating: ['world', 'c-america']},
                {code: "GR", fullName: 'Греция', relating: ['world', 'europe']},
                {code: "GQ", fullName: 'Экваториальная Гвинея', relating: ['world', 'africa']},
                {code: "GY", fullName: 'Гайана', relating: ['world', 's-america']},
                {code: "GE", fullName: 'Грузия', relating: ['world', 'asia']},
                {code: "GB", fullName: 'Соединенное Королевство', relating: ['world', 'europe']},
                {code: "GA", fullName: 'Габон', relating: ['world', 'africa']},
                {code: "GN", fullName: 'Гвинея', relating: ['world', 'africa']},
                {code: "GM", fullName: 'Гамбия', relating: ['world', 'africa']},
                {code: "GL", fullName: 'Гренландия', relating: ['world', 'n-america']},
                {code: "KW", fullName: 'Кувейт', relating: ['world', 'asia']},
                {code: "GH", fullName: 'Гана', relating: ['world', 'africa']},
                {code: "OM", fullName: 'Оман', relating: ['world', 'asia']},
                {code: "_3", fullName: 'Сомалиленд', relating: ['world', 'africa']},
                {code: "_2", fullName: 'Западная Сахара', relating: ['world', 'africa']},
                {code: "_1", fullName: 'Косово', relating: ['world', 'europe']},
                {code: "JO", fullName: 'Иордания', relating: ['world', 'asia']},
                {code: "HR", fullName: 'Хорватия', relating: ['world', 'europe']},
                {code: "HT", fullName: 'Гаити', relating: ['world']},
                {code: "HU", fullName: 'Венгрия', relating: ['world', 'europe']},
                {code: "HN", fullName: 'Гондурас', relating: ['world', 'america']},
                {code: "LV", fullName: 'Латвия', relating: ['world', 'europe']},
                {code: "PR", fullName: 'Пуэрто-Рико', relating: ['world']},
                {code: "PS", fullName: 'Палестинская территория', relating: ['world', 'asia']},
                {code: "PT", fullName: 'Португалия', relating: ['world', 'europe']},
                {code: "PY", fullName: 'Парагвай', relating: ['world', 's-america']},
                {code: "PA", fullName: 'Панама', relating: ['world', 'c-america']},
                {code: "PG", fullName: 'Папуа-Новая Гвинея', relating: ['world', 'oceania']},
                {code: "PE", fullName: 'Перу', relating: ['world', 's-america']},
                {code: "PK", fullName: 'Пакистан', relating: ['world', 'asia']},
                {code: "PH", fullName: 'Филиппины', relating: ['world', 'asia']},
                {code: "PL", fullName: 'Польша', relating: ['world', 'europe']},
                {code: "ZM", fullName: 'Замбия', relating: ['world', 'africa']},
                {code: "EE", fullName: 'Эстония', relating: ['world', 'europe']},
                {code: "EG", fullName: 'Египет', relating: ['world', 'africa']},
                {code: "ZA", fullName: 'ЮАР', relating: ['world', 'africa']},
                {code: "EC", fullName: 'Эквадор', relating: ['world', 's-america']},
                {code: "AL", fullName: 'Албания', relating: ['world', 'europe']},
                {code: "AO", fullName: 'Ангола', relating: ['world', 'africa']},
                {code: "KZ", fullName: 'Казахстан', relating: ['world', 'asia']},
                {code: "ET", fullName: 'Эфиопия', relating: ['world', 'africa']},
                {code: "ZW", fullName: 'Зимбабве', relating: ['world', 'africa']},
                {code: "ES", fullName: 'Испания', relating: ['world', 'europe']},
                {code: "ER", fullName: 'Эритрея', relating: ['world', 'africa']},
                {code: "ME", fullName: 'Черногория', relating: ['world', 'europe']},
                {code: "MD", fullName: 'Молдова', relating: ['world', 'europe']},
                {code: "MG", fullName: 'Мадагаскар', relating: ['world', 'africa']},
                {code: "MA", fullName: 'Марокко', relating: ['world', 'africa']},
                {code: "UZ", fullName: 'Узбекистан', relating: ['world', 'asia']},
                {code: "MM", fullName: 'Мьянма', relating: ['world', 'asia']},
                {code: "ML", fullName: 'Мали', relating: ['world', 'africa']},
                {code: "MN", fullName: 'Монголия', relating: ['world', 'asia']},
                {code: "MK", fullName: 'Македония', relating: ['world', 'europe']},
                {code: "MW", fullName: 'Малави', relating: ['world', 'africa']},
                {code: "MR", fullName: 'Мавритания', relating: ['world', 'africa']},
                {code: "UG", fullName: 'Уганда', relating: ['world', 'africa']},
                {code: "MY", fullName: 'Малайзия', relating: ['world', 'asia']},
                {code: "MX", fullName: 'Мексика', relating: ['world', 'c-america']},
                {code: "VU", fullName: 'Вануату', relating: ['world', 'oceania']},
                {code: "FR", fullName: 'Франция', relating: ['world', 'europe']},
                {code: "FI", fullName: 'Финляндия', relating: ['world', 'europe']},
                {code: "FJ", fullName: 'Фиджи', relating: ['world', 'oceania']},
                {code: "FK", fullName: 'Фолклендские острова', relating: ['world', 's-america']},
                {code: "NI", fullName: 'Никарагуа', relating: ['world', 'c-america']},
                {code: "NL", fullName: 'Нидерланды', relating: ['world', 'europe']},
                {code: "NO", fullName: 'Норвегия', relating: ['world', 'europe']},
                {code: "NA", fullName: 'Намибия', relating: ['world', 'africa']},
                {code: "NC", fullName: 'Новая Каледония', relating: ['world', 'oceania']},
                {code: "NE", fullName: 'Нигер', relating: ['world', 'africa']},
                {code: "NG", fullName: 'Нигерия', relating: ['world', 'africa']},
                {code: "NZ", fullName: 'Новая Зеландия', relating: ['world', 'oceania']},
                {code: "NP", fullName: 'Непал', relating: ['world', 'asia']},
                {code: "CI", fullName: 'Кот д\'Ивуар', relating: ['world', 'africa']},
                {code: "CH", fullName: 'Швейцария', relating: ['world', 'europe']},
                {code: "CO", fullName: 'Колумбия', relating: ['world', 's-america']},
                {code: "CN", fullName: 'Китай', relating: ['world', 'asia']},
                {code: "CM", fullName: 'Камерун', relating: ['world', 'africa']},
                {code: "CL", fullName: 'Чили', relating: ['world', 's-america']},
                {code: "CA", fullName: 'Канада', relating: ['world', 'n-america']},
                {code: "CG", fullName: 'Конго', relating: ['world', 'africa']},
                {code: "CF", fullName: 'Центрально-Африканская Республика', relating: ['world', 'africa']},
                {code: "CD", fullName: 'Демократическая Республика Конго', relating: ['world', 'africa']},
                {code: "CZ", fullName: 'Чешская Республика', relating: ['world', 'europe']},
                {code: "CY", fullName: 'Кипр', relating: ['world', 'asia']},
                {code: "CR", fullName: 'Коста-Рика', relating: ['world', 'c-america']},
                {code: "CU", fullName: 'Куба', relating: ['world']},
                {code: "SZ", fullName: 'Свазиленд', relating: ['world', 'africa']},
                {code: "SY", fullName: 'Сирийская Арабская Республика', relating: ['world', 'asia']},
                {code: "KG", fullName: 'Киргизия', relating: ['world', 'asia']},
                {code: "KE", fullName: 'Кения', relating: ['world', 'africa']},
                {code: "SS", fullName: 'Южный Судан', relating: ['world', 'africa']},
                {code: "SR", fullName: 'Суринам', relating: ['world', 's-america']},
                {code: "KH", fullName: 'Камбоджа', relating: ['world', 'asia']},
                {code: "SV", fullName: 'Эль-Сальвадор', relating: ['world', 'c-america']},
                {code: "SK", fullName: 'Словакия', relating: ['world', 'europe']},
                {code: "KR", fullName: 'Корея, Республика', relating: ['world', 'asia']},
                {code: "SI", fullName: 'Словения', relating: ['world', 'europe']},
                {code: "KP", fullName: 'Корея, НДР', relating: ['world', 'asia']},
                {code: "SO", fullName: 'Сомали', relating: ['world', 'africa']},
                {code: "SN", fullName: 'Сенегал', relating: ['world', 'africa']},
                {code: "SL", fullName: 'Сьерра-Леоне', relating: ['world', 'africa']},
                {code: "SB", fullName: 'Соломоновы острова', relating: ['world', 'oceania']},
                {code: "SA", fullName: 'Саудовская Аравия', relating: ['world', 'asia']},
                {code: "SE", fullName: 'Швеция', relating: ['world', 'europe']},
                {code: "SD", fullName: 'Судан', relating: ['world', 'africa']},
                {code: "DO", fullName: 'Доминиканская Республика', relating: ['world']},
                {code: "DJ", fullName: 'Джибути', relating: ['world', 'africa']},
                {code: "DK", fullName: 'Дания', relating: ['world', 'europe']},
                {code: "DE", fullName: 'Германия', relating: ['world', 'europe']},
                {code: "YE", fullName: 'Йемен', relating: ['world', 'asia']},
                {code: "AT", fullName: 'Австрия', relating: ['world', 'europe']},
                {code: "DZ", fullName: 'Алжир', relating: ['world', 'africa']},
                {code: "US", fullName: 'Соединенные Штаты', relating: ['world', 'n-america']},
                {code: "UY", fullName: 'Уругвай', relating: ['world', 's-america']},
                {code: "LB", fullName: 'Ливан', relating: ['world', 'asia']},
                {code: "LA", fullName: 'Лаос', relating: ['world', 'asia']},
                {code: "TW", fullName: 'Тайвань', relating: ['world', 'asia']},
                {code: "TT", fullName: 'Тринидад и Тобаго', relating: ['world']},
                {code: "TR", fullName: 'Турция', relating: ['world', 'asia']},
                {code: "LK", fullName: 'Шри-Ланка', relating: ['world', 'asia']},
                {code: "TN", fullName: 'Тунис', relating: ['world', 'africa']},
                {code: "TL", fullName: 'Тимор-Лесте', relating: ['world', 'asia']},
                {code: "TM", fullName: 'Туркмения', relating: ['world', 'asia']},
                {code: "TJ", fullName: 'Таджикистан', relating: ['world', 'asia']},
                {code: "LS", fullName: 'Лесото', relating: ['world', 'africa']},
                {code: "TH", fullName: 'Таиланд', relating: ['world', 'asia']},
                {code: "TF", fullName: 'Французские Южные территории', relating: ['world']},
                {code: "TG", fullName: 'Того', relating: ['world', 'africa']},
                {code: "TD", fullName: 'Чад', relating: ['world', 'africa']},
                {code: "LY", fullName: 'Ливийская Арабская Джамахирия', relating: ['world', 'africa']},
                {code: "AE", fullName: 'Объединенные Арабские Эмираты', relating: ['world', 'asia']},
                {code: "VE", fullName: 'Венесуэла Боливарианская Республика', relating: ['world', 's-america']},
                {code: "AF", fullName: 'Афганистан', relating: ['world', 'asia']},
                {code: "IQ", fullName: 'Ирак', relating: ['world', 'asia']},
                {code: "IS", fullName: 'Исландия', relating: ['world', 'europe']},
                {code: "IR", fullName: 'Иран', relating: ['world', 'asia']},
                {code: "AM", fullName: 'Армения', relating: ['world', 'asia']},
                {code: "IT", fullName: 'Италия', relating: ['world', 'europe']},
                {code: "VN", fullName: 'Вьетнам', relating: ['world', 'asia']},
                {code: "AR", fullName: 'Аргентина', relating: ['world', 's-america']},
                {code: "AU", fullName: 'Австралия', relating: ['world', 'oceania']},
                {code: "IL", fullName: 'Израиль', relating: ['world', 'asia']},
                {code: "IN", fullName: 'Индия', relating: ['world', 'asia']},
                {code: "TZ", fullName: 'Танзания', relating: ['world', 'africa']},
                {code: "AZ", fullName: 'Азербайджан', relating: ['world', 'asia']},
                {code: "IE", fullName: 'Ирландия', relating: ['world', 'europe']},
                {code: "ID", fullName: 'Индонезия', relating: ['world', 'asia']},
                {code: "UA", fullName: 'Украина', relating: ['world', 'europe']},
                {code: "QA", fullName: 'Катар', relating: ['world', 'asia']},
                {code: "MZ", fullName: 'Мозамбик', relating: ['world', 'africa']}
            ],
            currentAreas: []
        };
    };

    componentWillMount() {
        this.filterAreasByMapType(this.state.currentMap);
    }

    filterAreasByMapType(type) {
        this.state.currentAreas = this.state.areas.filter((area) => {
            return area.relating.includes(type);
        });
    }

    onChangeMap(type) {
        this.filterAreasByMapType(type);
        this.setState({ currentMap: type });
    }

    onSelectArea(isChecked, areaAbbr) {

        let newAreas;

        if (!isChecked) {
            newAreas = this.state.selectedAreas.filter((item) => {
                return item !== areaAbbr;
            });
        } else {
            newAreas = [].concat(
                this.state.selectedAreas,
                areaAbbr
            );
        }

        this.setState({selectedAreas: newAreas});

    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <MapComponent map={this.state.currentMap}
                              selectedAreas={this.state.selectedAreas}
                              onChangeMap={this.onChangeMap.bind(this)}/>
                <AreaSelector
                    onSelectArea={this.onSelectArea.bind(this)}
                    areas={this.state.currentAreas}/>
            </div>
        );
    }
}