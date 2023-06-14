export const Heading: React.FC<{ numOfIcecreams: number }> = ({
  numOfIcecreams,
}) => {
  console.log('Icecream - Heading');

  return <h2>Number of icecreams - {numOfIcecreams}</h2>;
};
