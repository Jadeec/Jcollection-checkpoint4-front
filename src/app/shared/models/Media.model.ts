import { Type } from "./Type.model";


export class Media{
    private _name: string;
    private _artist : string;
    private _genre: string;
    private _publishingDate: Date;
    private _description : string;
    private _type : Type;


	constructor(name: string, artist: string, genre: string, publishingDate: Date, description: string, type: Type) {
		this._name = name;
		this._artist = artist;
		this._genre = genre;
		this._publishingDate = publishingDate;
		this._description = description;
		this._type = type;
	}


    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter artist
     * @return {string}
     */
	public get artist(): string {
		return this._artist;
	}

    /**
     * Getter genre
     * @return {string}
     */
	public get genre(): string {
		return this._genre;
	}

    /**
     * Getter publishingDate
     * @return {Date}
     */
	public get publishingDate(): Date {
		return this._publishingDate;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter type
     * @return {Type}
     */
	public get type(): Type {
		return this._type;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter artist
     * @param {string} value
     */
	public set artist(value: string) {
		this._artist = value;
	}

    /**
     * Setter genre
     * @param {string} value
     */
	public set genre(value: string) {
		this._genre = value;
	}

    /**
     * Setter publishingDate
     * @param {Date} value
     */
	public set publishingDate(value: Date) {
		this._publishingDate = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter type
     * @param {Type} value
     */
	public set type(value: Type) {
		this._type = value;
	}

}