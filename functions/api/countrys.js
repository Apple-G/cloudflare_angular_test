
export const onRequest = () => {
  var response = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  
  return new Response( response );
}
