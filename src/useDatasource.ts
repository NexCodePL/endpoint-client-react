import { EndpointDefinition } from "@nexcodepl/endpoint-types";
import { useRefStatic } from "@nexcodepl/store-react";
import { Datasource, DatasourceConfig } from "@nexcodepl/endpoint-client";

export function useDatasource<TEndpoint extends EndpointDefinition<any, any, any, boolean>>(
    endpointDefinition: TEndpoint,
    config?: DatasourceConfig<TEndpoint>
): Datasource<TEndpoint> {
    const ds = useRefStatic<Datasource<TEndpoint>>(() => new Datasource<TEndpoint>(endpointDefinition, config ?? {}));

    return ds.current;
}
