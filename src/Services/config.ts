export default class Config{
    public vsrmEndpoint:string = "https://cielocosta.vsrm.visualstudio.com/";
    public genericEndpoint:string = "https://cielocosta.visualstudio.com/";
    public serviceAuthorization:string = "Basic cmFtaW4uYWhtYWRpOnEyZHJpa3hldWwzM3JyaGpjdnlreHc2bXlzd21qYm5leHVrNno3ZXczc2MyZG9zNm53dmE=";
    public headers = {'Content-Type': 'application/json','Authorization': `${this.serviceAuthorization}`}
}