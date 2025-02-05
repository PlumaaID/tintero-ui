import { Provider } from "~/lib/vaults";
import PlumaaLogo from "./plumaa-logo";

const ProviderLogo: React.FC<{
  provider: Provider;
}> = ({ provider }) => {
  switch (provider) {
    case Provider.PlumaaID:
      return <PlumaaLogo />;
  }
};

export default ProviderLogo;
