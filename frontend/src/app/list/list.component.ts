import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PersonService } from '../person.service';
import { DrawService } from '../draw.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
	people : Array<any> = [{
		name: '', mail: ''
	}];
	
	constructor(
		private personService: PersonService,
		private drawService: DrawService,
		public toastr: ToastsManager,
		private vcr: ViewContainerRef
	){
		this.toastr.setRootViewContainerRef(vcr);
	}
	
	pushPerson(){
		this.people.push({name: '', mail: ''});
	}
	
	save(person){

		let index = this.people.indexOf(person);
		
		if(person._id){
			this.personService.update(person._id, person)
			.then( success => {
				this.toastr.success('Pessoa atualizada!', 'Atualizado!');
			})
			.catch(err => console.log(err));
		} else {
			this.personService.save(person)
			.then( personAdd => {
				this.people[index] = personAdd;
				this.pushPerson();
				this.toastr.success('Pessoa salva!', 'Salvo!');
			})
			.catch(err => this.toastr.error('Ocorreu um erro', 'Oops!'));			
		}
	}

	delete(person) {
		
		let index = this.people.indexOf(person);

		if(person._id) {
			this.personService.delete(person._id)
			.then( success => {				
				this.toastr.success("Deletado!");			
			})
			.catch(err => this.toastr.error('Ocorreu um erro', 'Oops!'));			
		} else {
			this.people.splice(index, 1);
		}
	}


	confirm(){

		let flag = true;
		
		if(this.people.length<3) {
			this.toastr.warning('São necessários ao menos 3 participantes!', 'Alerta!');
			return;
		};

		this.people.forEach((person,index) => {
			if(!person._id){
				this.people.splice(index, 1);
			} else if(person.name == '' || person.mail == ''){
				flag=false;
				this.toastr.warning('Verifique os participantes!', 'Alerta!');
			} else return person;
		});
		if(flag) { 
			this.drawService.make(this.people) 
			.then(success => this.toastr.success('Sorteio Realizado!', 'Sucesso!'))
			.catch(err => { console.log(err); this.toastr.error('Ocorreu um erro', 'Oops!')});			
		}
		else console.log(this.people);
	}
}
