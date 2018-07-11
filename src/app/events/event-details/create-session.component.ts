import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, Form } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    level: FormControl;
    duration: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            level: this.level,
            duration: this.duration,
            abstract: this.abstract
        })
    }  

    saveSession(formValues) {
        let session: ISession= {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            level: formValues.level,
            duration: +formValues.duration,
            abstract: formValues.abstract,
            voters: []
        };

        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit()
    }
}