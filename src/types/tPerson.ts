export default interface tPerson {
    id:  number;
    image: string | null;
    nameRu:    string | null;
    nameEn:    string | null;
    facts:     string[] | null;
    films:     Film[];
    details:   Details;
}

interface Details {
    profession: Birthday;
    sex:        Birthday;
    growth:     Birthday;
    birthday:   Birthday;
    birthplace: Birthday;
    death:      Birthday;
    deathplace: Birthday;
    spouses:    Birthday;
}

interface Birthday {
    title: string;
    value: null | string;
}

interface Film {
    id: number;
    name:   string;
    genres:  string;
}


