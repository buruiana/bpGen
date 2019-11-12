import { availablecomponents } from '../../../utils/constants';

export const availablefields = {
  [availablecomponents.COMPONENTS]: ['NAME', availablecomponents.PROVIDERS, availablecomponents.TECHNOS],
  [availablecomponents.TECHNOS]: ['NAME'],
  [availablecomponents. PROP_TYPES]: ['NAME'],
  [availablecomponents.PROVIDERS]: ['NAME', availablecomponents.TECHNOS],
  [availablecomponents.TEMPLATES]: ['NAME', availablecomponents.TECHNOS],
  [availablecomponents.PROJECTS]: ['NAME', availablecomponents.TECHNOS],
  [availablecomponents.USERS]: ['NAME'],
};