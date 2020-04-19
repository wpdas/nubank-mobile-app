import React, { createContext, useState } from 'react';
import i18n, { Scope } from 'i18n-js';

import en from './en-US';
import pt from './pt-BR';

export interface LanguageData {
  invite_friends: string;
  phone_recharge: string;
  cash_in: string;
  deposit: string;
  transfer: string;
  adjust_limit: string;
  help: string;
  pay: string;
  block_card: string;
  virtual_card: string;
  organize_shortcuts: string;
  credit_card: string;
  opened_invoice: string;
  available_limit: string;
  recent_buy_description: string;
  account: string;
  available_balance: string;
  last_account_action_description: string;
  nubank_rewards_title: string;
  nubank_rewards_description: string;
  nubank_rewards_actionButton: string;
  bank: string;
  agency: string;
  bank_account: string;
  profile: string;
  configure_card: string;
  change_language: string;
  sign_out: string;
}

// Set languages
i18n.translations = {
  en_US: en,
  pt_BR: pt,
};

// Set default language
i18n.locale = 'pt_BR';

export type SupportedLanguages = 'en_US' | 'pt_BR';

/**
 * Get prop data by key
 * @param languageItemKey
 */
export const translate = (languageItemKey: string) => i18n.t(languageItemKey);

export type LocaleContextValue = {
  language: SupportedLanguages;
  toggleLanguage: () => void;
};

const defaultValue: LocaleContextValue = {
  language: 'pt_BR',
  toggleLanguage: () => {},
};

const LocaleContext = createContext<LocaleContextValue>(defaultValue);
export default LocaleContext;

type Props = {
  children: React.ReactNode;
};

export const LocaleProvider: React.FC<Props> = ({ children }: Props) => {
  const [language, setLanguage] = useState<SupportedLanguages>('pt_BR');

  const toggleLanguage = () => {
    const newLanguage = language == 'pt_BR' ? 'en_US' : 'pt_BR';
    setLanguage(newLanguage);
    i18n.locale = newLanguage;
  };

  return (
    <LocaleContext.Provider
      value={{
        language,
        toggleLanguage,
      }}>
      {children}
    </LocaleContext.Provider>
  );
};
