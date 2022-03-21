import { Media } from './Media.model';

export class Type {
  private _name: string;
  private _medias: Media | null;

  constructor(name: string, medias: Media) {
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
}
