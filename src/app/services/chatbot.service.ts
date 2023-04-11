import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ChatbotService {
    serviceUrl: string = "http://127.0.0.1:5000";

    constructor(private http: HttpClient) { }

    getIndex(): Observable<string>{
        const httpHeader = {"Content-Type": "application/json"};
        const url = this.serviceUrl + "/";

        return this.http.get(url,{headers: httpHeader,  responseType: 'text'});
    }


    postMessage(message: string): Observable<any>{
        const httpHeader = {"Content-Type": "application/json"};
        const url = this.serviceUrl + "/chat";
        const body: Map<string, string> = new Map<string, string>();

        body.set("message", message);
        const jsonBody = JSON.stringify(Object.fromEntries(body));

        return this.http.post<any>(url, jsonBody, {headers: httpHeader});
    }

    postAnalytics(selectedDataSource: string){
        const httpHeader = {"Content-Type": "application/json"};
        const url = this.serviceUrl + "/analytics";
        const body: Map<string, string> = new Map<string, string>();

        body.set("dataSource", selectedDataSource);
        const jsonBody = JSON.stringify(Object.fromEntries(body));

        return this.http.post<any>(url, jsonBody, {headers: httpHeader});
    }

}