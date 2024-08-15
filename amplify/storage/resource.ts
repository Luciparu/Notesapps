import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyNotesDrive",
  access: (allow) => ({
    "media/{djcytuyj5e7fz}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
