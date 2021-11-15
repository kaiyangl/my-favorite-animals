import { useMutation, useQuery } from "react-query";

export const useGetAnimals = () => useQuery<any, unknown, Animal[]>('animals', async () => {
    return fetch('http://localhost:5000/api/animals').then(async res => await res.json());
});
