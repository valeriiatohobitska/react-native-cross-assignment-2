import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';
import { RecentSearch } from '../data/products';
import { CoffeeIcon } from './CoffeeIcon';

type RecentSearchListProps = {
  searches: RecentSearch[];
};

export function RecentSearchList({ searches }: RecentSearchListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent searches</Text>
      {searches.map(search => (
        <View key={search.id} style={styles.row}>
          <Text style={styles.term}>{search.title}</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.removeButton}>
            <CoffeeIcon name="x" size={8} color={colors.background} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
  },
  heading: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxl,
  },
  term: {
    color: colors.text,
    fontSize: typography.body,
  },
  removeButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.text,
  },
});
