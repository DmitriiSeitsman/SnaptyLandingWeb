import Link from "next/link";

type PolicySection = {
  icon: string;
  title: string;
  intro?: string;
  items: string[];
};

const sections: PolicySection[] = [
  {
    icon: "1",
    title: "Information We Collect",
    intro: "Snapty may use the following information when you choose to add it:",
    items: [
      "Contact information, such as first name, last name and phone number, only when you grant access to your address book or enter this information manually.",
      "Shoot and event details, such as date, time, location, notes, pricing, prepayment and shooting details, entered manually by the user.",
      "Client photos, optionally added manually by the user.",
      "App usage events related to certain actions inside Snapty, such as opening screens, changing settings, creating records or starting an export.",
    ],
  },
  {
    icon: "2",
    title: "How We Use Information",
    intro: "The information is used to provide and improve Snapty's core features:",
    items: [
      "Managing client bookings, shoots, notes and reminders.",
      "Providing quick access to client and event information.",
      "Sending local reminders about upcoming events.",
      "Improving the app experience, stability and usability based on aggregated product analytics.",
    ],
  },
  {
    icon: "3",
    title: "Contacts Access",
    intro: "Contacts access is optional and used only when you choose to add a client from your address book.",
    items: [
      "Snapty may ask for access to your contacts to let you quickly select a client's name and phone number.",
      "Contacts are not automatically copied into the app.",
      "Contact data is used only after an explicit user action.",
      "Snapty does not access your contacts in the background.",
    ],
  },
  {
    icon: "4",
    title: "Camera Access",
    intro: "Camera access is optional and used only for client photos.",
    items: [
      "Snapty may ask for access to the camera when you choose to add or update a client avatar.",
      "Photos are added only after an explicit user action.",
      "Camera access is not used for background capture, scanning or tracking.",
      "Client photos are not used for advertising or profiling.",
    ],
  },
  {
    icon: "5",
    title: "Data Storage",
    intro: "Snapty is designed as a local-first app.",
    items: [
      "Client records, shoots, notes and reminders are stored locally on your device.",
      "If iCloud sync is enabled by the user and available on the device, Apple may sync app data through the user's iCloud account.",
      "Snapty does not operate its own external server for storing your client database.",
      "You can delete individual shoots, reminders, notes or entire client profiles.",
    ],
  },
  {
    icon: "6",
    title: "Analytics",
    intro: "Snapty may collect limited app usage analytics to understand how the app is used and to improve the product.",
    items: [
      "Analytics may include events such as screen opens, button taps, theme selection, export actions and feature usage.",
      "Analytics is used to improve app stability, usability and feature decisions.",
      "Snapty does not intentionally send client names, phone numbers, photos, notes, locations, pricing details or shoot descriptions as analytics event data.",
      "Analytics data is not used to sell personal information.",
    ],
  },
  {
    icon: "7",
    title: "Notifications",
    intro: "Snapty uses notifications to remind you about your own planned events.",
    items: [
      "Snapty uses local notifications to remind users about upcoming shoots, events and reminders.",
      "Local notifications are scheduled on the device.",
      "No remote push notifications are required for local reminders.",
      "You can manage notification permissions in iOS Settings.",
    ],
  },
  {
    icon: "8",
    title: "Data Deletion",
    intro: "Users have control over the data they create in Snapty.",
    items: [
      "You can delete individual events and shoots.",
      "You can delete client profiles entirely.",
      "Deleting a client profile may also remove related client information from the app, depending on the app's current data model.",
      "You can uninstall the app to remove locally stored app data from the device, subject to iOS and iCloud behavior.",
    ],
  },
  {
    icon: "9",
    title: "Third-Party Access",
    intro: "Snapty does not sell your personal data.",
    items: [
      "Snapty does not sell client data to third parties.",
      "Snapty does not use client records for advertising profiling.",
      "Some system-level services, such as iCloud or analytics providers, may process limited technical or usage data according to their own policies when enabled or integrated.",
    ],
  },
  {
    icon: "10",
    title: "Changes to This Policy",
    items: [
      "We may update this Privacy Policy from time to time.",
      "Changes will be reflected in this document inside the app.",
      "The date at the top of the policy shows when it was last updated.",
    ],
  },
];

export default function PolicyPage() {
  return (
    <main className="page info-page">
      <section className="shell">
        <h1>Privacy Policy</h1>
        <p>How Snapty uses data inside the app.</p>
        <p className="policy-updated">Last updated: Apr 21, 2026</p>

        <article className="info-block policy-summary">
          <h2>At a glance</h2>
          <p>
            Snapty stores your work data locally, uses permissions only for selected features, and
            does not sell your data.
          </p>
          <ul className="policy-list">
            <li>Client and shoot data is created and controlled by the user.</li>
            <li>Camera access may be used only to add a client photo.</li>
            <li>Analytics helps improve the app and does not include client record content.</li>
          </ul>
        </article>

        {sections.map((section) => (
          <article key={section.title} className="info-block">
            <div className="policy-heading">
              <span className="policy-icon" aria-hidden="true">
                {section.icon}
              </span>
              <h2>{section.title}</h2>
            </div>
            {section.intro ? <p>{section.intro}</p> : null}
            <ul className="policy-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <Link className="back-link" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
