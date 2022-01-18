let comp = [
    {cpu: 'intel', info: {cores:2, cache: 3}},
    {cpu: 'intel', info: {cores:4, cache: 4}},
    {cpu: 'amd', info: {cores:1, cache: 1}},
    {cpu: 'intel', info: {cores:3, cache: 2}},
    {cpu: 'amd', info: {cores:4, cache: 2}},
];

comp.sort((a, b) => a.info.cores - b.info.cores);

console.log(comp);