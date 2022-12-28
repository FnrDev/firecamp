import { BulkEditTable } from '@firecamp/ui-kit';
import shallow from 'zustand/shallow';
import { IStore, useStore } from '../../../store';

const HeadersTab = () => {
  let { headers, changeHeaders } = useStore(
    (s: IStore) => ({
      headers: s.request.headers,
      changeHeaders: s.changeHeaders,
    }),
    shallow
  );

  return (
    <BulkEditTable
      onChange={changeHeaders}
      key={'headers'}
      rows={headers}
      name={'headers'}
      meta={{
        mode: {
          key: 'ife-header-key',
          value: 'ife-header-value',
        },
        allowDescription: false,
      }}
    />
  );
};

export default HeadersTab;
