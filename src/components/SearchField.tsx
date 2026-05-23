import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, layout, radii, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type SearchFieldProps = {
  value: string;
  placeholder?: string;
  editable?: boolean;
  autoFocus?: boolean;
  onSubmit?: () => void;
};

export function SearchField({
  value,
  placeholder = 'Search',
  editable = false,
  autoFocus = false,
  onSubmit,
}: SearchFieldProps) {
  return (
    <View style={styles.container}>
      <CoffeeIcon name="search" size={16} color={colors.coffee} />
      <TextInput
        value={value}
        placeholder={placeholder}
        editable={editable}
        autoFocus={autoFocus}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: layout.controlHeight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: typography.body,
    paddingVertical: 0,
  },
});
