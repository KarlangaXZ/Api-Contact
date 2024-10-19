const API_URL = "http://localhost:4224/api/contacts";


interface Contact {
  id?: number;
  name: string;
  phoneNumber: string;
  email: string;
}

// API 
async function getContacts(): Promise<void> {
  const response = await fetch(API_URL);
  const contacts_user: Contact[] = await response.json();

  const tablebd = document.getElementById(
    "contactTable"
  ) as HTMLTableElement | null;
  if (!tablebd) {
    console.error("No se encontró el elemento con ID table");
    return;
  }

  tablebd.innerHTML = "";

  contacts_user.forEach((contact) => {
    const rows = document.createElement("tr");
    rows.innerHTML = `
      <td class="table-success font-semibold text-info bg-dark">${contact.id}</td> 
      <td class="table-success text-uppercase border border-start-1 border-black">${contact.name}</td> 
      <td class="table-success border border-start-1 border-black">${contact.phoneNumber}</td> 
      <td class="table-success text-uppercase border border-start-1 border-black">${contact.email}</td>
      <td class="table-success border border-start-1 border-black" >
        <button class="btn btn-primary" onclick="editContact(${contact.id})">Edit</button>
        <button class="btn btn-danger"  onclick="deleteContact(${contact.id})">Delete</button>
      </td> 

    `;

    tablebd.appendChild(rows);
  });
}

// Add
async function postContact(contact: Contact): Promise<void> {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  getContacts();
}

// Delete
async function deleteContact(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  getContacts();
}

// Edit
async function editContact(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`);
  const contact: Contact = await response.json();

  const contactId = document.getElementById(
    "contactId"
  ) as HTMLInputElement | null;
  const contactName = document.getElementById(
    "contactName"
  ) as HTMLInputElement | null;
  const contactPhone = document.getElementById(
    "contactPhone"
  ) as HTMLInputElement | null;
  const contactEmail = document.getElementById(
    "contactEmail"
  ) as HTMLInputElement | null;

  if (!contactId || !contactName || !contactPhone || !contactEmail) {
    console.error("No se encontraron los elementos del formulario");
    return;
  }

  contactId.value = contact.id?.toString() || "";
  contactName.value = contact.name;
  contactPhone.value = contact.phoneNumber;
  contactEmail.value = contact.email;
}

// Manejo del formulario
const contactForm = document.getElementById(
  "contactForm"
) as HTMLFormElement | null;

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = (document.getElementById("contactId") as HTMLInputElement | null)
      ?.value;
    const contact: Contact = {
      name: (document.getElementById("contactName") as HTMLInputElement).value,
      phoneNumber: (document.getElementById("contactPhone") as HTMLInputElement)
        .value,
      email: (document.getElementById("contactEmail") as HTMLInputElement)
        .value,
    };

    if (id) {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contact),
      });
    } else {
      await postContact(contact);
    }
    contactForm.reset();
    const contactIdField = document.getElementById(
      "contactId"
    ) as HTMLInputElement | null;
    if (contactIdField) {
      contactIdField.value = "";
    }
    getContacts();
  });
  getContacts();
}
