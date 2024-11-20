# Patient Queue

class Patient:
    def __init__(self, name, age, reason_for_visit):
        self.name = name
        self.age = age
        self.reason = reason_for_visit

class Node:
    def __init__(self, patient):
        self.patient = patient
        self.next = None

class PatientQueue:
    def __init__(self):
        self.head = None

    def add_patient(self, name, age, reason_for_visit):
        new_patient = Patient(name, age, reason_for_visit)
        new_node = Node(new_patient)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def delete_patient(self, name):
        if not self.head:
            print('No patients in the queue.')
            return
        if self.head.patient.name == name:
            self.head = self.head.next
            return
        prev = None
        current = self.head
        while current:
            if current.patient.name == name:
                prev.next = current.next
                return
            prev = current
            current = current.next
        print(f'Patient named {name} not found in the queue.')

    def display_queue(self):
        if not self.head:
            print('No patients in the queue.')
            return
        current = self.head
        print('\n Patient Queue: \n')
        while current:
            patient = current.patient
            print(f'Name: {patient.name}')
            print(f'Age: {patient.age}')
            print(f'Reason For Visit: {patient.reason}')
            print('---------------------')
            current = current.next

patient_queue = PatientQueue()

patient_queue.add_patient('Jane Doe', 35, 'Chest pains, shortness of breath')
patient_queue.add_patient('John Smith', 45, 'Tripped over dog, swollen knee, pain in leg up to hip')
patient_queue.add_patient('Jim Gordon', 68, 'Low blood pressure, feels faint')

patient_queue.display_queue()

patient_queue.delete_patient('John Smith')

patient_queue.display_queue()
