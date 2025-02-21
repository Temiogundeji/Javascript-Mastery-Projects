Your JavaScript form validation library should cover the following aspects:

### **Core Features**

1. **Field Validation** – Validate input fields based on rules (e.g., required, email, min/max length, regex).
2. **Custom Error Messages** – Allow users to define custom error messages per field.
3. **Real-time Validation** – Validate fields on input, blur, or submit events.
4. **Multiple Input Types** – Support text, email, password, checkbox, radio, select, textarea, etc.
5. **Form-wide Validation** – Ensure the entire form meets all validation criteria before submission.

### **Advanced Features**

6. **Async Validation** – Support API-based validation (e.g., check if username is taken).
7. **Conditional Validation** – Validate fields based on other field values (e.g., "Confirm Password" should match "Password").
8. **Validation Chaining** – Allow multiple rules on a single field (`required + minLength(6)`).
9. **Field Group Validation** – Validate grouped inputs (e.g., check if at least one checkbox is selected).
10. **Localization Support** – Support different languages for error messages.

### **Customization & Extensibility**

11. **Custom Rules** – Let users define their own validation rules.
12. **Custom Error Display** – Allow different ways to show errors (inline, popups, tooltips, etc.).
13. **Plugin/Hook System** – Let users extend or modify validation behavior.
14. **Integration Friendly** – Work seamlessly with popular frameworks (React, Vue, etc.).

### **Performance & Usability**

15. **Lightweight & Fast** – Ensure minimal performance impact.
16. **No External Dependencies** – Keep it vanilla JS or optionally integrate with libraries.
17. **Accessibility (A11y)** – Make error messages screen-reader friendly.
18. **Cross-browser Support** – Work across modern and older browsers.
