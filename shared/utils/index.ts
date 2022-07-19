import { format } from 'date-fns';
import queryString from 'query-string';

function camelToSnake(value: string) {
  return value.replace(/[\w]([A-Z])/g, m => `${m[0]}_${m[1]}`).toLowerCase();
}

const stringifyParams = (data: any) => {
  const { params, option } = data;
  return queryString.stringify(params, {
    arrayFormat: 'bracket',
    encode: false,
    skipNull: true,
    skipEmptyString: true,
    ...option,
  });
};

const isBrowser = () => {
  return typeof window !== 'undefined';
};

function getCurrentDomain() {
  const parts = isBrowser() ? window.location.hostname.split('.') : [];
  parts.shift();
  return parts.join('.');
}

function getUrlRoot(pathname?: string) {
  return pathname ? pathname.split('/')[1] : '';
}

function formatDate(date: string | number) {
  if (!date) return ''
  return format(new Date(date), 'dd/MM/yyyy')
}

export { stringifyParams, camelToSnake, getCurrentDomain, getUrlRoot, isBrowser, formatDate };
