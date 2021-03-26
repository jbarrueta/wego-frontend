const vehicles = [
    {number:'ER 2020', number2:'F376', status: 'inactive'},
    {number:'ER 2021', number2:'A0343', status: 'available'},
    {number:'ER 2022', number2:'G7456', status: 'available'},
  ]
  const data = [
    {fleetId: 1, name: 'Pet2Vet', vehicles: [...vehicles]},
    {fleetId: 2, name: 'Grocery', vehicles: [...vehicles.slice(1)]},
    {fleetId: 3, name: 'Medicine', vehicles: [...vehicles]},
    {fleetId: 4, name: 'Boat', vehicles: [...vehicles]},
  ];
  
  export default data;