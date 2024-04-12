import { person } from "@/models/Person";
import { ref } from "vue";
import { defineStore } from "pinia";
import useApi, { useApiRawRequest } from "@/models/api";

export const usePeopleStore = defineStore('peopleStore', () => {
  const apiGetPeople = useApi<person[]>('people');
  const people = ref<person[]>([]);
  let allpeople: person[] = [];

  const loadpeople = async () => {
    await apiGetPeople.request();

    if (apiGetPeople.response.value) {
      return apiGetPeople.response.value;
    }
    return [];
  };

  const load = async () => {
    allpeople = await loadpeople();
    people.value = allpeople;
  };
  const getpersonById = (id: number) => {
    return allpeople.find((person) => person.id === id);
  };


  const addperson = async (person: person) => {
    const apiAddperson = useApi<person>('people', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    }); 
    
    await apiAddperson.request();
    if (apiAddperson.response.value) {
      load();      
    }
  };
  const updateperson = async (person: person) => {
    const apiUpdateperson = useApi<person>('people/' + person.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    });

    await apiUpdateperson.request();
    if (apiUpdateperson.response.value) {
      load();
    }    
  };


  const deleteperson = async (person: person) => {
    const deletepersonRequest = useApiRawRequest(`people/${person.id}`, {
      method: 'DELETE',
    });

    const res = await deletepersonRequest();

    if (res.status === 204) {
      let id = people.value.indexOf(person);

      if (id !== -1) {
        people.value.splice(id, 1);
      }

      id = people.value.indexOf(person);

      if (id !== -1) {
        people.value.splice(id, 1);
      }
    }
  };

  return { people, load, getpersonById, addperson, updateperson, deleteperson };
});





