// Patient Queue

class Patient {
    constructor(name, age, reason_for_visit) {
        this.name = name;
        this.age = age;
        this.reason = reason_for_visit;
    }
}

class Node {
    constructor(patient) {
        this.patient = patient;
        this.next = null;
    }
}

class PatientQueue {
    constructor() {
        this.head = null;
    }

    addPatient(name, age, reason_for_visit) {
        const newPatient = new Patient(name, age, reason_for_visit);
        const newNode = new Node(newPatient);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delPatient(name) {
        if (!this.head) {
            console.log('No patients in the queue.');
            return;
        }
        if (this.head.patient.name === name) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head;
        while (current) {
            if (current.patient.name === name) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
        console.log(`Patient named ${name} not found in the queue.`);
    }

    displayQueue() {
        if (!this.head) {
            console.log('No patients in the queue.');
            return;
        }
        let current = this.head;
        console.log('\n Patient Queue: \n');
        while (current) {
            let patient = current.patient;
            console.log(`Name: ${patient.name}`);
            console.log(`Age: ${patient.age}`);
            console.log(`Reason For Visit: ${patient.reason}`);
            console.log(`------------------`);
            current = current.next;
        }
    }
}

const patientQueue = new PatientQueue();

patientQueue.addPatient('Jane Doe', 35, 'Chest pains, shortness of breath');
patientQueue.addPatient('John Smith', 45, 'Tripped over dog, swollen knee, pain in leg up to hip');
patientQueue.addPatient('Jim Gordon', 68, 'Low blood pressure, feels faint');

patientQueue.displayQueue();

patientQueue.delPatient('John Smith');

patientQueue.displayQueue();