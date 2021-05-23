const sortContacts = (contacts, isAsc = true) =>
  Array.isArray(contacts)
    ? contacts.sort((a, b) => (isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
    : null;
