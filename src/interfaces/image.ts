export interface IImage{
    isDefault:boolean;
    onChange:(e: React.FormEvent<HTMLInputElement>)=>void;
    src:string;
}
