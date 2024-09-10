const branch = process.argv[2];
const mode = process.argv[3] || "branch";

const ticketTypeLabels = [ 'feature', 'bug', 'tool', 'testing', 'debt', 'tech-debt', 'lint', 'misc'];

const ticketTypeAliases = {
  'feat': 'feature',
  'test': 'testing',
  'debt': 'tech-debt',
  'story': 'feature'
};

//aliases are valid values as well.
ticketTypeLabels.push(...Object.keys(ticketTypeAliases));

if (!branch) {
  process.exit(0);
}

/**
 * looks for a branch with a name like 'feature/RR-1234/this-is-a-cool-feature' or similar.
 */

if ( mode === "branch" || mode === "b") {

  const match = branch.match(/([A-Za-z]*\-[0-9]*)/);
  if ( match ) {
    const ticket = match[0];
    if (! ticket.match(/.*-0*$/)) {
      console.log(match[0]);
    }
  }
}
else if ( mode === "type" ) {
  if ( branch.indexOf('/') > 3) {
    let first = branch.split("/").shift();

    if ( ticketTypeLabels.includes(first)) {
       if ( ticketTypeAliases.hasOwnProperty(first) )  {
         first = ticketTypeAliases[first];
       }
      console.log(first);
    }
  }
}
else if ( mode === "title" ) {
  const parts = branch.split("/");
  if ( parts.length >= 3 ) {
    parts.shift();//ype
    parts.shift();//ticket name.
    let title = parts.join("/").replaceAll('-', ' ');
    title = title.substring(0, 1).toUpperCase() + title.substring(1);
    console.log(title);
  }
}