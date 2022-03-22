import { Type } from './Type.model';

export class Media {
  private _id:number
  private _title: string;
  private _artist: string;
  private _genre: string;
  private _publishingDate: Date | null;
  private _description: string;
  private _type: Type;

  constructor(
    id:number,
    title: string,
    artist: string,
    genre: string,
    publishingDate: Date | null,
    description: string,
    type: Type
  ) {
    this._id =id
    this._title = title;
    this._artist = artist;
    this._genre = genre;
    this._publishingDate = publishingDate;
    this._description = description;
    this._type = type;
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
   * @return {Date | null}
   */
  public get publishingDate(): Date | null {
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
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
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
   * @param {Date | null} value
   */
  public set publishingDate(value: Date| null) {
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
  /**
   * Setter type
   * @param {number} value
   */
   public set id(value: number) {
    this._id = value;
  }

    /**
   * Getter title
   * @return {number}
   */
     public get id(): number{
      return this._id;
    }
  
}
