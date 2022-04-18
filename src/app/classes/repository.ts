export class Repository {
    constructor(
        public name: string,
        public url: string,
        public description: string,
        public language: string,
        public created: Date,
        public forks:number,
    ){}
}
