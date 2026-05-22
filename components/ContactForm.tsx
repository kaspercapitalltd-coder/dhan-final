"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const subject = (
          target.elements.namedItem("subject") as HTMLInputElement
        ).value;
        const body = (target.elements.namedItem("body") as HTMLTextAreaElement)
          .value;
        window.location.href = `mailto:mahir@thecapitalguru.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-text-secondary text-sm mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full bg-bg-secondary border border-border rounded p-3 text-white focus:border-accent-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-text-secondary text-sm mb-2">
          Message
        </label>
        <textarea
          name="body"
          required
          rows={4}
          className="w-full bg-bg-secondary border border-border rounded p-3 text-white focus:border-accent-gold focus:outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-accent-gold hover:bg-accent-gold-dim text-bg-primary font-bold py-4 rounded uppercase tracking-wider transition-colors"
      >
        Open in Mail Client
      </button>
    </form>
  );
}
