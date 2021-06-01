const sortContacts = (contacts, isAsc = true) =>
  !Array.isArray(contacts)
    ? null
    : contacts.sort((a, b) =>
        isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      );
