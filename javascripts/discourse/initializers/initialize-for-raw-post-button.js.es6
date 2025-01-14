import I18n from "I18n";
import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";

export default {
  name: "guest-reply-button",
  initialize() {
    withPluginApi("0.8.7", api => {
      const currentUser = api.getCurrentUser();
      if (currentUser) return;

      api.attachWidgetAction("post-menu", "guestReply", function() {
        showModal("login");
      });

      api.addPostMenuButton("guest-reply", () => {
        const args = {
          action: "guestReply",
          icon: "reply",
          className: "guest-reply",
          title: themePrefix("button_title"),
          position: "last"
        };
        
        if (true) {
          args.label = "topic.reply.title";
        }
        
        return args;
      });
    });
  }
};
