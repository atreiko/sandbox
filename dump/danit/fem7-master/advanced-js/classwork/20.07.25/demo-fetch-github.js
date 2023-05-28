function getUsers(names) {
  const jobs = [];

  for (const name of names) {
    const job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      },
    );
    jobs.push(job);
  }
  console.log(jobs);
  const results = Promise.all(jobs);
  // console.log(results);
  return results;
}
getUsers(['globalq', 'cyberbiont', 'ivimedv']).then((result) =>
  console.log(result),
);
