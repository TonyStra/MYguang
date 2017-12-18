<script>
import { apiConfig } from "../../js/api_config.js";
export default {
  created(){
      this.$http.get(apiConfig.logout)
           .then(rsp =>alert(rsp.data.message));
  }
}
</script>
