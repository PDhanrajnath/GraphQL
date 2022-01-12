import { useQuery, gql } from "@apollo/client";
// import React from 'react';
import Link from "./link";

const FEED_QUERY = gql`
  {
    books {
      title
      author
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.books.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

// const LinkList = () => {
//   const linksToRender = [
//     {
//       id: '1',
//       title:
//         'Prisma gives you a powerful database toolkit 😎',
//       author: 'https://prisma.io'
//     },
//     {
//       id: '2',
//       title: 'The best GraphQL client',
//       author: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

//   return (
//     <div>
//       {linksToRender.map((link) => (
//         <Link key={link.id} link={link} />
//       ))}
//     </div>
//   );
// };

export default LinkList;
