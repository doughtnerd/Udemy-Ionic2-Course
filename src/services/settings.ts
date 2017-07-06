export class SettingsService {

  private altBackground = false;

  setAltBackground(isSet: boolean) {
    this.altBackground = isSet;
  }

  getAltBackground(): boolean {
    return this.altBackground;
  }
}
