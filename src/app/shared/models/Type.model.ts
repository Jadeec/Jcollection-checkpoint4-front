import { Media } from './Media.model';

export class Type {
  private _name: string;
  private _medias: Media | null;
  private _id: number;

  constructor(name: string, medias: Media, id: number) {
    this._id = id;
    this._name = name;
    this._medias = medias;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter medias
   * @return {Media }
   */
  public get medias(): Media | null {
    return this._medias;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter medias
   * @param {Media } value
   */
  public set medias(value: Media | null) {
    this._medias = value;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }
}
